import type { DayProgram } from '@/types/exam';
import type { VaoStore } from '@/lib/store/model';
import { isDayUnlocked } from '@/lib/progress';
import { DayCard, type DayStatus } from '@/components/dashboard/DayCard';

interface DayGridProps {
  days: DayProgram[];
  state: VaoStore;
  /** Highest unlocked day, used to highlight the current day. */
  activeDay: number;
}

/** The 30-day interactive grid map. */
export function DayGrid({ days, state, activeDay }: DayGridProps) {
  return (
    <section>
      <header className="mb-3 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">30-Day Program</h2>
          <p className="text-sm text-slate-500">
            Sequential unlock — finish a day to open the next one. Completed days stay reviewable.
          </p>
        </div>
        <span className="hidden text-xs font-medium text-slate-400 sm:block">
          {state.completedDays.length} / {days.length} completed
        </span>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {days.map((day) => {
          const completed = state.completedDays.includes(day.dayNumber);
          const status: DayStatus = completed
            ? 'completed'
            : isDayUnlocked(day.dayNumber, state)
              ? 'active'
              : 'locked';

          return (
            <DayCard
              key={day.dayNumber}
              day={day}
              status={status}
              score={state.dayScores[String(day.dayNumber)]}
            />
          );
        })}
      </div>

      {activeDay <= days.length ? (
        <p className="mt-3 text-xs text-slate-400">
          Tip: a day unlocks automatically after you answer every question in the current set.
        </p>
      ) : null}
    </section>
  );
}
