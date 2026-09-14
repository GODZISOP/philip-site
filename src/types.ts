export interface PillarItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  summary: string;
  description: string;
  executiveTake: string;
  kpis: string[];
}

export interface PhaseItem {
  phase: string;
  weeks: string;
  title: string;
  subtitle: string;
  focus: string;
  deliverables: string[];
  mindset: string;
}

export interface AssessmentQuestion {
  id: number;
  category: 'strength' | 'conditioning' | 'recovery' | 'lifestyle' | 'mindset';
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    ageDelta: number; // impact on performance age
    scoreImpact: number;
  }[];
}

export interface AssessmentResult {
  chronologicalAge: number;
  performanceAge: number;
  tier: 'Accelerated Decline' | 'Average Baseline' | 'High Potential' | 'Optimal Prime';
  summary: string;
  pillarScores: {
    strength: number;
    recovery: number;
    conditioning: number;
    mobility: number;
    consistency: number;
  };
  recommendations: string[];
}
