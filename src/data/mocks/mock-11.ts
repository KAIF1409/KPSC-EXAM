import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 11 — Science + Polity combined (standard difficulty).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_11: MockExam = defineMock({
  mockNumber: 11,
  title: 'Mock 11 — Science & Polity Combined',
  focus: 'Two heavy scoring sections back to back, standard difficulty.',
  difficultyMix: 'standard',
  sampleA: [
    m('polity-governance', 'm11-a1', 'Which emergency has never been declared in India?', ['National emergency', 'Financial emergency', 'President\u2019s rule', 'Internal disturbance'], 1, 'Article 360 (financial emergency) has never been invoked.', 'medium'),
  ],
  sampleB: [
    m('computer-literacy', 'm11-b1', 'Which network type covers a single building or campus?', ['WAN', 'MAN', 'LAN', 'VPN'], 2, 'LAN = Local Area Network.', 'easy'),
  ],
});
