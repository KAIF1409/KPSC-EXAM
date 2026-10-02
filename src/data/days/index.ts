import type { DayProgram } from '@/types/exam';
import { DAY_01 } from '@/data/days/day-01';
import { DAY_02 } from '@/data/days/day-02';
import { DAY_03 } from '@/data/days/day-03';
import { DAY_04 } from '@/data/days/day-04';
import { DAY_05 } from '@/data/days/day-05';
import { DAY_06 } from '@/data/days/day-06';
import { DAY_07 } from '@/data/days/day-07';
import { DAY_08 } from '@/data/days/day-08';
import { DAY_09 } from '@/data/days/day-09';
import { DAY_10 } from '@/data/days/day-10';
import { DAY_11 } from '@/data/days/day-11';
import { DAY_12 } from '@/data/days/day-12';
import { DAY_13 } from '@/data/days/day-13';
import { DAY_14 } from '@/data/days/day-14';
import { DAY_15 } from '@/data/days/day-15';
import { DAY_16 } from '@/data/days/day-16';
import { DAY_17 } from '@/data/days/day-17';
import { DAY_18 } from '@/data/days/day-18';
import { DAY_19 } from '@/data/days/day-19';
import { DAY_20 } from '@/data/days/day-20';
import { DAY_21 } from '@/data/days/day-21';
import { DAY_22 } from '@/data/days/day-22';
import { DAY_23 } from '@/data/days/day-23';
import { DAY_24 } from '@/data/days/day-24';
import { DAY_25 } from '@/data/days/day-25';
import { DAY_26 } from '@/data/days/day-26';
import { DAY_27 } from '@/data/days/day-27';
import { DAY_28 } from '@/data/days/day-28';
import { DAY_29 } from '@/data/days/day-29';
import { DAY_30 } from '@/data/days/day-30';

/**
 * The 30-day sequential program.
 * One file per day so a parsed PDF for a single day can be dropped in without
 * touching any other day (see the TODO anchors inside each file).
 */
export const DAYS: DayProgram[] = [
  DAY_01, DAY_02, DAY_03, DAY_04, DAY_05, DAY_06, DAY_07, DAY_08, DAY_09, DAY_10,
  DAY_11, DAY_12, DAY_13, DAY_14, DAY_15, DAY_16, DAY_17, DAY_18, DAY_19, DAY_20,
  DAY_21, DAY_22, DAY_23, DAY_24, DAY_25, DAY_26, DAY_27, DAY_28, DAY_29, DAY_30,
];

export function dayById(dayNumber: number): DayProgram | undefined {
  return DAYS.find((day) => day.dayNumber === dayNumber);
}

/** Every day question, flattened — used for the mock-paper pools. */
export const DAY_QUESTIONS = DAYS.flatMap((day) => day.questions);
