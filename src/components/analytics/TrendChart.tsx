'use client';

import { cn } from '@/lib/utils';

export interface TrendPoint {
  label: string;
  value: number;
  caption?: string;
}

interface TrendChartProps {
  points: TrendPoint[];
  /** Upper bound of the y-axis (accuracy charts use 100, mock scores use total marks). */
  target?: number;
  stroke?: string;
  emptyLabel?: string;
  className?: string;
}

const WIDTH = 600;
const HEIGHT = 220;
const PAD_X = 34;
const PAD_Y = 22;

/**
 * Dependency-free SVG trend line (no chart library needed, per the zero-config rule).
 * Renders inside a responsive viewBox so it scales on mobile without JS.
 */
export function TrendChart({
  points,
  target = 100,
  stroke = '#4f46e5',
  emptyLabel = 'No data yet — attempt a few questions to build the trend.',
  className,
}: TrendChartProps) {
  if (points.length === 0) {
    return (
      <div className={cn('card flex h-48 items-center justify-center p-6 text-center text-sm text-slate-500', className)}>
        {emptyLabel}
      </div>
    );
  }

  const innerW = WIDTH - PAD_X * 2;
  const innerH = HEIGHT - PAD_Y * 2;
  const stepX = points.length > 1 ? innerW / (points.length - 1) : 0;

  const coords = points.map((point, index) => {
    const x = PAD_X + index * stepX;
    const clamped = Math.max(0, Math.min(target, point.value));
    const y = PAD_Y + innerH - (clamped / target) * innerH;
    return { ...point, x, y };
  });

  const path = coords.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(' ');
  const area = `${PAD_X},${PAD_Y + innerH} ${path} ${(PAD_X + innerW).toFixed(1)},${PAD_Y + innerH}`;
  const gridValues = [0, 25, 50, 75, 100];

  return (
    <div className={cn('card p-4', className)}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Progress trend chart"
        className="h-52 w-full"
      >
        {gridValues.map((value) => {
          const y = PAD_Y + innerH - (value / 100) * innerH;
          return (
            <g key={value}>
              <line
                x1={PAD_X}
                x2={WIDTH - PAD_X}
                y1={y}
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray={value === 0 ? '0' : '4 6'}
              />
              <text x={6} y={y + 4} fill="#94a3b8" fontSize="11">
                {Math.round((value / 100) * target)}
              </text>
            </g>
          );
        })}

        <polygon points={area} fill={stroke} opacity="0.09" />
        <polyline
          points={path}
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {coords.map((point) => (
          <g key={`${point.label}-${point.x}`}>
            <circle cx={point.x} cy={point.y} r="4" fill="#ffffff" stroke={stroke} strokeWidth="2.5">
              <title>
                {point.label}: {point.value}
                {point.caption ? ` (${point.caption})` : ''}
              </title>
            </circle>
            <text x={point.x} y={HEIGHT - 6} fill="#94a3b8" fontSize="11" textAnchor="middle">
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
