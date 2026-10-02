import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 24 — Computer literacy & cyber security advanced set.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_24: MockExam = defineMock({
  mockNumber: 24,
  title: 'Mock 24 — Computer & Cyber Security',
  focus: 'Networking devices, security threats, cloud and emerging technology.',
  difficultyMix: 'advanced',
  sampleA: [
    m('current-affairs', 'm24-a1', 'The "Digital India" programme was launched in:', ['2012', '2014', '2015', '2017'], 2, 'Digital India was launched on 1 July 2015 to deliver services electronically.', 'medium'),
  ],
  sampleB: [
    m('computer-literacy', 'm24-b1', 'Which of the following best describes blockchain?', ['A distributed, tamper-resistant ledger', 'A type of antivirus', 'A programming language', 'A cloud storage service'], 0, 'Blockchain is a decentralised ledger whose records are chained cryptographically.', 'hard'),
    m('computer-literacy', 'm24-b2', 'HTTPS primarily ensures:', ['Speed', 'Encryption of data in transit', 'Offline access', 'File compression'], 1, 'HTTPS uses TLS to encrypt communication between browser and server.', 'medium'),
  ],
});
