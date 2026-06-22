"use client";

import { useMemo, useState } from "react";

export default function CalculatorPage() {
  const [current, setCurrent] = useState(0);
  const [goal, setGoal] = useState(8000);
  const [income, setIncome] = useState(500);
  const [boost, setBoost] = useState(1);

  const result = useMemo(() => {
    const remaining = Math.max(goal - current, 0);
    const adjustedIncome = Math.max(income * boost, 1);
    return {
      remaining,
      cycles: Math.ceil(remaining / adjustedIncome),
      adjustedIncome
    };
  }, [current, goal, income, boost]);

  return (
    <main className="section">
      <div className="shell grid two">
        <div>
          <span className="badge">No fake rates</span>
          <h1>Grow a Garden 2 Calculator</h1>
          <p className="lead">
            Estimate how many harvest or trading cycles you need for a Sheckles goal. The default goal uses the public 8,000 Sheckles Megaphone price.
          </p>
        </div>
        <div className="card">
          <div className="calc-form">
            <label className="field">
              Current Sheckles
              <input type="number" min="0" value={current} onChange={(event) => setCurrent(Number(event.target.value))} />
            </label>
            <label className="field">
              Goal Sheckles
              <input type="number" min="0" value={goal} onChange={(event) => setGoal(Number(event.target.value))} />
            </label>
            <label className="field">
              Sheckles per cycle
              <input type="number" min="1" value={income} onChange={(event) => setIncome(Number(event.target.value))} />
            </label>
            <label className="field">
              Boost multiplier
              <select value={boost} onChange={(event) => setBoost(Number(event.target.value))}>
                <option value={1}>1.0x normal</option>
                <option value={1.25}>1.25x event</option>
                <option value={1.5}>1.5x event</option>
                <option value={2}>2.0x event</option>
              </select>
            </label>
          </div>
          <div className="result-box" style={{ marginTop: 18 }}>
            <strong>{result.remaining.toLocaleString()} Sheckles remaining</strong>
            <p>
              At {Math.round(result.adjustedIncome).toLocaleString()} Sheckles per cycle, you need about {result.cycles.toLocaleString()} cycles.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
