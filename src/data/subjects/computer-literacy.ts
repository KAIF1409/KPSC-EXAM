import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * COMPUTER LITERACY (Paper 2) — repeated KPSC/KEA pattern:
 * shortcut keys, memory units, MS Office basics, internet/networking terms, cyber safety.
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the computer master guide.
 */
export const COMPUTER_LITERACY_QUESTIONS: MCQ[] = [
  m('computer-literacy', 'cl-fun-01', 'Which of the following memories is volatile?', ['RAM', 'ROM', 'Hard disk', 'Flash drive'], 0, 'RAM loses its contents when power is switched off; ROM is non-volatile.', 'easy', { reference: 'PYQ: RAM vs ROM asked every year' }),
  m('computer-literacy', 'cl-fun-02', 'The CPU of a computer consists of:', ['ALU and Control Unit (with registers)', 'RAM and ROM', 'Monitor and keyboard', 'Cache and hard disk'], 0, 'The CPU = Arithmetic Logic Unit + Control Unit + registers.', 'medium'),
  m('computer-literacy', 'cl-fun-03', 'One kilobyte (KB) is equal to:', ['1000 bytes', '1024 bytes', '1024 bits', '512 bytes'], 1, '1 KB = 1024 bytes, 1 MB = 1024 KB, 1 GB = 1024 MB.', 'easy'),
  m('computer-literacy', 'cl-fun-04', 'Which of these is an input device?', ['Plotter', 'Scanner', 'Monitor', 'Speaker'], 1, 'Scanner, keyboard, mouse, OMR and MICR are input devices; plotter and monitor are output devices.', 'easy'),
  m('computer-literacy', 'cl-fun-05', 'Which memory is fastest and directly accessed by the CPU?', ['Cache memory', 'Main memory (RAM)', 'Hard disk', 'DVD'], 0, 'Memory hierarchy by speed: registers → cache → RAM → secondary storage.', 'medium'),
  m('computer-literacy', 'cl-os-01', 'Which of the following is an operating system?', ['Linux', 'MS Word', 'Oracle', 'Photoshop'], 0, 'Linux, Windows, macOS and Android are operating systems; the others are application software.', 'easy'),
  m('computer-literacy', 'cl-os-02', 'The Android operating system is developed by:', ['Microsoft', 'Google (based on the Linux kernel)', 'Apple', 'IBM'], 1, 'Android is maintained by Google and built on the Linux kernel.', 'easy'),
  m('computer-literacy', 'cl-os-03', 'The Linux kernel was originally created by:', ['Linus Torvalds', 'Richard Stallman', 'Ken Thompson', 'Bill Gates'], 0, 'Linus Torvalds released the Linux kernel in 1991; Stallman led the GNU project.', 'medium'),
  m('computer-literacy', 'cl-mso-01', 'In MS Word, which shortcut key combination is used to make text bold?', ['Ctrl + B', 'Ctrl + I', 'Ctrl + U', 'Ctrl + D'], 0, 'Ctrl+B = bold, Ctrl+I = italics, Ctrl+U = underline.', 'easy'),
  m('computer-literacy', 'cl-mso-02', 'Which shortcut key starts a slide show in MS PowerPoint from the first slide?', ['F2', 'F5', 'F7', 'F12'], 1, 'F5 starts the slide show from the first slide; Shift+F5 starts from the current slide.', 'medium'),
  m('computer-literacy', 'cl-mso-03', 'In MS Excel, every formula begins with which symbol?', ['+', '=', '#', '@'], 1, 'Every Excel formula must begin with "=".', 'easy'),
  m('computer-literacy', 'cl-mso-04', 'The default file extension of a PowerPoint 2016 presentation is:', ['.ppt', '.pptx', '.pps', '.docx'], 1, '.pptx — the macro-enabled version is .pptm.', 'easy'),
  m('computer-literacy', 'cl-win-01', 'Which shortcut opens Windows Task Manager directly?', ['Ctrl + Shift + Esc', 'Ctrl + Alt + Del', 'Alt + F4', 'Ctrl + Esc'], 0, 'Ctrl+Shift+Esc opens Task Manager directly; Ctrl+Alt+Del shows the security screen.', 'medium'),
  m('computer-literacy', 'cl-win-02', 'Which key combination deletes a file permanently without sending it to the Recycle Bin?', ['Delete', 'Shift + Delete', 'Ctrl + Delete', 'Alt + Delete'], 1, 'Shift+Delete bypasses the Recycle Bin.', 'easy'),
  m('computer-literacy', 'cl-net-01', 'Which network covers a country or continent?', ['LAN', 'MAN', 'WAN', 'PAN'], 2, 'LAN = building/campus, MAN = city, WAN = country/global, PAN = personal.', 'easy'),
  m('computer-literacy', 'cl-net-02', 'The main function of DNS is to:', ['Encrypt data', 'Translate domain names into IP addresses', 'Block viruses', 'Compress files'], 1, 'DNS resolves human-readable names such as karnataka.gov.in to numeric IP addresses.', 'medium'),
  m('computer-literacy', 'cl-net-03', 'IPv4 addresses are how many bits long?', ['16 bits', '32 bits', '64 bits', '128 bits'], 1, 'IPv4 = 32 bits; IPv6 = 128 bits.', 'hard'),
  m('computer-literacy', 'cl-web-01', 'The World Wide Web (WWW) was invented by:', ['Tim Berners-Lee', 'Vint Cerf', 'Bill Gates', 'Steve Wozniak'], 0, 'Tim Berners-Lee invented the WWW in 1989-91 at CERN.', 'easy'),
  m('computer-literacy', 'cl-web-02', 'What is the main advantage of HTTPS over HTTP?', ['It is faster', 'It encrypts communication', 'It does not need a browser', 'It works offline'], 1, 'HTTPS adds TLS encryption, protecting data in transit.', 'easy'),
  m('computer-literacy', 'cl-cyb-01', 'Ransomware is malware that:', ['Encrypts files and demands payment', 'Displays advertisements', 'Speeds up the computer', 'Backs up data'], 0, 'It locks or encrypts data and demands a ransom for the key.', 'easy'),
  m('computer-literacy', 'cl-cyb-02', 'Sending fraudulent e-mails to steal passwords is called:', ['Phishing', 'Spamming', 'Hacking hardware', 'Defragmentation'], 0, 'Phishing uses fake mails/sites; "smishing" is its SMS form.', 'easy'),
  m('computer-literacy', 'cl-new-01', 'Which of the following is a cloud computing service model?', ['SaaS', 'LED', 'RAM', 'MODEM'], 0, 'The three cloud models are IaaS, PaaS and SaaS.', 'medium'),
  m('computer-literacy', 'cl-new-02', 'The "Digital India" programme was launched in:', ['2012', '2014', '2015', '2017'], 2, 'Digital India was launched on 1 July 2015 to deliver services electronically.', 'medium'),
];
