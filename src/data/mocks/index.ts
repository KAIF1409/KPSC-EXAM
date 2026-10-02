import type { MockExam } from '@/types/exam';
import { MOCK_01 } from '@/data/mocks/mock-01';
import { MOCK_02 } from '@/data/mocks/mock-02';
import { MOCK_03 } from '@/data/mocks/mock-03';
import { MOCK_04 } from '@/data/mocks/mock-04';
import { MOCK_05 } from '@/data/mocks/mock-05';
import { MOCK_06 } from '@/data/mocks/mock-06';
import { MOCK_07 } from '@/data/mocks/mock-07';
import { MOCK_08 } from '@/data/mocks/mock-08';
import { MOCK_09 } from '@/data/mocks/mock-09';
import { MOCK_10 } from '@/data/mocks/mock-10';
import { MOCK_11 } from '@/data/mocks/mock-11';
import { MOCK_12 } from '@/data/mocks/mock-12';
import { MOCK_13 } from '@/data/mocks/mock-13';
import { MOCK_14 } from '@/data/mocks/mock-14';
import { MOCK_15 } from '@/data/mocks/mock-15';
import { MOCK_16 } from '@/data/mocks/mock-16';
import { MOCK_17 } from '@/data/mocks/mock-17';
import { MOCK_18 } from '@/data/mocks/mock-18';
import { MOCK_19 } from '@/data/mocks/mock-19';
import { MOCK_20 } from '@/data/mocks/mock-20';
import { MOCK_21 } from '@/data/mocks/mock-21';
import { MOCK_22 } from '@/data/mocks/mock-22';
import { MOCK_23 } from '@/data/mocks/mock-23';
import { MOCK_24 } from '@/data/mocks/mock-24';
import { MOCK_25 } from '@/data/mocks/mock-25';
import { MOCK_26 } from '@/data/mocks/mock-26';
import { MOCK_27 } from '@/data/mocks/mock-27';
import { MOCK_28 } from '@/data/mocks/mock-28';
import { MOCK_29 } from '@/data/mocks/mock-29';
import { MOCK_30 } from '@/data/mocks/mock-30';

/** The 30 full-length mock exams, in series order. */
export const MOCKS: MockExam[] = [
  MOCK_01, MOCK_02, MOCK_03, MOCK_04, MOCK_05, MOCK_06, MOCK_07, MOCK_08, MOCK_09, MOCK_10,
  MOCK_11, MOCK_12, MOCK_13, MOCK_14, MOCK_15, MOCK_16, MOCK_17, MOCK_18, MOCK_19, MOCK_20,
  MOCK_21, MOCK_22, MOCK_23, MOCK_24, MOCK_25, MOCK_26, MOCK_27, MOCK_28, MOCK_29, MOCK_30,
];

export function mockById(id: string): MockExam | undefined {
  return MOCKS.find((mock) => mock.id === id);
}
