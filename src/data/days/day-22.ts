import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 22 — Computer Literacy: internet, networking and cyber safety.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_22: DayProgram = {
  dayNumber: 22,
  topicTitle: 'Computer Literacy — Internet, Networking & Cyber Security',
  topicTitleKannada: 'ಗಣಕ ಪರಿಜ್ಞಾನ — ಅಂತರ್ಜಾಲ, ಜಾಲ ಮತ್ತು ಸೈಬರ್ ಭದ್ರತೆ',
  subject: 'computer-literacy',
  paper: 'PAPER_2',
  focusPoints: [
    'LAN / MAN / WAN and common networking devices',
    'URL, HTTP vs HTTPS, DNS and IP addressing',
    'Malware families: virus, worm, trojan, ransomware; phishing',
  ],
  estimatedMinutes: 35,
  questions: [
    m('computer-literacy', 'd22-01', 'A network spread across a country or the world is called a:', ['LAN', 'MAN', 'WAN', 'PAN'], 2, 'WAN (Wide Area Network); LAN covers a building, MAN a city.', 'easy'),
    m('computer-literacy', 'd22-02', 'Which device connects two different networks and routes data between them?', ['Hub', 'Router', 'Repeater', 'Scanner'], 1, 'A router forwards packets between networks; a switch works inside one network.', 'medium'),
    m('computer-literacy', 'd22-03', 'DNS is used to:', ['Encrypt e-mails', 'Convert domain names into IP addresses', 'Store web pages', 'Compress images'], 1, 'The Domain Name System resolves names to IP addresses.', 'medium'),
    m('computer-literacy', 'd22-04', 'Which malware locks or encrypts files and demands payment?', ['Adware', 'Ransomware', 'Spyware', 'Rootkit'], 1, 'Ransomware extorts money by denying access to data.', 'easy'),
    m('computer-literacy', 'd22-05', 'Fake e-mails or websites used to steal login details are called:', ['Phishing', 'Spamming', 'Caching', 'Pinging'], 0, 'Phishing is a social-engineering attack; antivirus and awareness are the defences.', 'easy'),
  ],
};
