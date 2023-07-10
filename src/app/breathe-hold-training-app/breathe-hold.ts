export enum Activity {
    None = 0,
    Breathe,
    Hold
}

export interface BreatheHold {
    breatheSec: number;
    holdSec: number;
    isActive: Activity;
}