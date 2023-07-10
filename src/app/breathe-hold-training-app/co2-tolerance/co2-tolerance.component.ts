import { Component } from '@angular/core';
import { Observable, Subscription, takeWhile, timer } from 'rxjs';

import { BreatheHold, Activity } from '../breathe-hold';

const audioDir: string = "../../assets/sounds/breathe-hold-training-app/";
const dfltBreatheHold: BreatheHold[] = [
  { breatheSec: 150, holdSec: 45, isActive: Activity.None },
  { breatheSec: 135, holdSec: 45, isActive: Activity.None },
  { breatheSec: 120, holdSec: 45, isActive: Activity.None },
  { breatheSec: 105, holdSec: 45, isActive: Activity.None },
  { breatheSec: 90, holdSec: 45, isActive: Activity.None },
  { breatheSec: 75, holdSec: 45, isActive: Activity.None },
  { breatheSec: 60, holdSec: 45, isActive: Activity.None },
  { breatheSec: 60, holdSec: 45, isActive: Activity.None },
];

@Component({
  selector: 'app-co2-tolerance',
  templateUrl: './co2-tolerance.component.html',
  styleUrls: ['./co2-tolerance.component.scss']
})
export class Co2ToleranceComponent {
  isStarted: boolean = false;
  curBreatheHold: BreatheHold[] = [];
  displayedColumns: string[] = ["breathe", "hold"];
  curStage: number = 0;
  appTimer: Observable<Number> = timer(0, 1000);
  appTimerSub: Subscription | undefined;
  breatheSound = new Audio(audioDir+"breathe.mp3");
  holdSound = new Audio(audioDir+"hold.mp3");
  sessFinSound = new Audio(audioDir+"session_finished.mp3");
  thirtySecSound = new Audio(audioDir+"30_sec.mp3");
  tenSecSound = new Audio(audioDir+"10_sec.mp3");
  fiveSound = new Audio(audioDir+"five.mp3");
  fourSound = new Audio(audioDir+"four.mp3");
  threeSound = new Audio(audioDir+"three.mp3");
  twoSound = new Audio(audioDir+"two.mp3");
  oneSound = new Audio(audioDir+"one.mp3");
  zeroSound = new Audio(audioDir + "zero.mp3");
  private soundTbl: Map<number, Function> = new Map<number, Function>([
    [30, () => { this.thirtySecSound.play(); }],
    [10, () => { this.tenSecSound.play(); }],
    [5, () => { this.fiveSound.play(); }],
    [4, () => { this.fourSound.play(); }],
    [3, () => { this.threeSound.play(); }],
    [2, () => { this.twoSound.play(); }],
    [1, () => { this.oneSound.play(); }],
    [0, () => { this.zeroSound.play(); }],
  ]);

  constructor() {
    dfltBreatheHold.forEach(val => this.curBreatheHold.push(Object.assign({}, val)));
  }

  getBreatheBgColor(element: BreatheHold): string {
    return element.isActive === Activity.Breathe ? "gold" : "white";
  }

  getHoldBgColor(element: BreatheHold): string {
    return element.isActive === Activity.Hold ? "gold" : "white";
  }

  timerTask() {
    // finished
    if (this.curStage == this.curBreatheHold.length) {
      this.sessFinSound.play();
      this.onReset();
      return;
    }

    let row = this.curBreatheHold[this.curStage];

    // countdown seq: up -> down, breathe -> hold.
    if (0 < row.breatheSec) {
      if (row.isActive != Activity.Breathe) {
        row.isActive = Activity.Breathe;
        this.breatheSound.play();
      } else {
        row.breatheSec--;
      }
    } else if (0 < row.holdSec) {
      if (row.isActive != Activity.Hold) {
        row.isActive = Activity.Hold;
        this.holdSound.play();
      } else {
        row.holdSec--;
      }
    }

    // hint sound
    if ((row.isActive === Activity.Breathe) && (this.soundTbl.has(row.breatheSec))) {
      this.soundTbl.get(row.breatheSec)!();
    } else if ((row.isActive === Activity.Hold) && (this.soundTbl.has(row.holdSec))) {
      this.soundTbl.get(row.holdSec)!();
    }

    // go to next row
    if (row.breatheSec == 0 && row.holdSec == 0) {
      this.curStage++;
      row.isActive = Activity.None;
    }
  }

  onStart(): void {
    this.isStarted = true;
    this.appTimerSub = this.appTimer.pipe(
      takeWhile(it => this.isStarted)
    ).subscribe(() => { this.timerTask(); });
  }

  onPause(): void {
    this.isStarted = false;
    this.appTimerSub?.unsubscribe();
  }

  onReset(): void {
    this.isStarted = false;
    this.curBreatheHold = [];
    dfltBreatheHold.forEach(val => this.curBreatheHold.push(Object.assign({}, val)));
    this.appTimerSub?.unsubscribe();
    this.curStage = 0;
  }
}
