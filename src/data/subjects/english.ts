import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * GENERAL ENGLISH (Paper 2) — the 7 rules that generate ~35 marks every year:
 * subject-verb agreement, fixed prepositions, hardly/no sooner pairs, question tags,
 * voice, narration and idioms. Sourced from the PYQ English checklist.
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the English master guide.
 */
export const ENGLISH_QUESTIONS: MCQ[] = [
  m('english', 'en-sva-01', 'Choose the correct sentence: "The Minister, along with his officials, ___ coming."', ['is', 'are', 'were', 'have been'], 0, '"Along with / as well as / together with" do not change the number of the first subject, so the singular verb "is" is correct.', 'medium', { reference: 'PYQ pattern: subject-verb agreement with interrupting phrase' }),
  m('english', 'en-sva-02', 'Fill in the blank: "Neither the teacher nor the students ___ present."', ['is', 'was', 'are', 'has'], 2, 'With "neither…nor" the verb agrees with the nearer subject ("students"), which is plural.', 'medium'),
  m('english', 'en-sva-03', 'Fill in the blank: "Either the students or the teacher ___ present."', ['are', 'is', 'were', 'have'], 1, 'The nearer subject is "teacher" (singular), so the singular verb "is" is used.', 'hard'),
  m('english', 'en-prep-01', 'Choose the grammatically correct sentence:', ['We discussed about the project.', 'We discussed the project.', 'We discussed on the project.', 'We discussed for the project.'], 1, '"Discuss" is a transitive verb and takes no preposition — "discussed about" is a classic trap.', 'easy'),
  m('english', 'en-prep-02', 'Fill in the blank: "The book ___ ten chapters."', ['comprises of', 'comprises', 'is comprising of', 'comprise of'], 1, 'In the active voice "comprise" takes no "of": the whole comprises the parts.', 'medium'),
  m('english', 'en-prep-03', 'Fill in the blank: "I congratulate you ___ your success."', ['for', 'on', 'about', 'with'], 1, 'Fixed collocation: congratulate someone ON something.', 'easy'),
  m('english', 'en-conj-01', 'Fill in the blank: "Hardly had I reached the station ___ the train left."', ['than', 'when', 'then', 'that'], 1, '"Hardly / Scarcely" are always followed by "when"; only "no sooner" takes "than".', 'easy', { reference: 'PYQ: hardly-when vs no sooner-than trap' }),
  m('english', 'en-conj-02', 'Fill in the blank: "No sooner did I reach the station ___ the train left."', ['when', 'than', 'then', 'that'], 1, 'No sooner … than (never "when").', 'easy'),
  m('english', 'en-tag-01', 'Add the correct question tag: "I am late, ___?"', ['am not I', "aren't I", 'isn\'t it', "amn't I"], 1, '"I am" takes the tag "aren\'t I" in standard English.', 'medium'),
  m('english', 'en-tag-02', 'Add the correct question tag: "She cannot drive, ___?"', ['can she', 'can\u2019t she', 'does she', 'is she'], 0, 'A negative statement takes a positive tag.', 'easy'),
  m('english', 'en-voice-01', 'Change into passive voice: "The boy killed the snake."', ['The snake was killed by the boy.', 'The snake is killed by the boy.', 'The snake has killed by the boy.', 'The snake was being killed by the boy.'], 0, 'Simple past active → simple past passive: was/were + V3.', 'medium'),
  m('english', 'en-nar-01', 'Change into indirect speech: He said, "I am writing a letter."', ['He said that he was writing a letter.', 'He said that he is writing a letter.', 'He says that he was writing a letter.', 'He said that I was writing a letter.'], 0, 'Present continuous shifts to past continuous in reported speech.', 'medium'),
  m('english', 'en-nar-02', 'Change into indirect speech: The teacher said, "The Earth revolves around the Sun."', ['The teacher said that the Earth revolved around the Sun.', 'The teacher said that the Earth revolves around the Sun.', 'The teacher said that the Earth has revolved around the Sun.', 'The teacher says the Earth revolve around the Sun.'], 1, 'A universal truth keeps the present tense even in reported speech.', 'hard'),
  m('english', 'en-idiom-01', 'The idiom "to leave no stone unturned" means:', ['To waste money', 'To try every possible means', 'To give up easily', 'To work without planning'], 1, 'It means making every possible effort to achieve something.', 'easy'),
  m('english', 'en-idiom-02', 'The idiom "an axe to grind" means:', ['To sharpen a tool', 'To have a private, selfish motive', 'To quarrel openly', 'To work very hard'], 1, 'It refers to a hidden personal reason behind one\u2019s actions.', 'medium'),
  m('english', 'en-idiom-03', 'The idiom "at the eleventh hour" means:', ['At midnight', 'At the very last moment', 'Very early in the morning', 'After a long delay'], 1, 'It means at the last possible moment.', 'easy'),
  m('english', 'en-owl-01', 'One word for "a person who studies birds":', ['Ornithologist', 'Entomologist', 'Botanist', 'Zoologist'], 0, 'Entomologist studies insects; botany is the study of plants.', 'medium'),
  m('english', 'en-owl-02', 'One word for "a person who walks on foot":', ['Pedestrian', 'Passenger', 'Commuter', 'Vagrant'], 0, 'A traveller on foot is a pedestrian.', 'easy'),
  m('english', 'en-art-01', 'Fill in the blank: "He is ___ honest man."', ['a', 'an', 'the', 'no article'], 1, '"Honest" begins with a vowel sound, so the article is "an".', 'easy'),
  m('english', 'en-syn-01', 'Choose the synonym of "abundant":', ['Scarce', 'Plentiful', 'Cheap', 'Hidden'], 1, 'Abundant = existing in large quantities = plentiful.', 'easy'),
  m('english', 'en-ant-01', 'Choose the antonym of "ancient":', ['Old', 'Modern', 'Historic', 'Antique'], 1, 'Ancient (very old) ↔ modern (of the present time).', 'easy'),
];
