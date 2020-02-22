import React from "react";
import HeightAndWeightOverview from "../../../widgets/heightandweight/heightandweight-overview.component";
import VitalsOverview from "../../../widgets/vitals/vitals-overview.component";
import ConditionsOverview from "../../../widgets/conditions/conditions-overview.component";
import AllergyOverview from "../../../widgets/allergies/allergy-overview.component";
import NotesOverview from "../../../widgets/notes/notes-overview.component";
import ProgramsOverview from "../../../widgets/programs/programs-overview.component";
import MedicationsOverview from "../../../widgets/medications/medications-overview.component";
import Dashboard, {
  DashboardConfigType
} from "../../../ui-components/dashboard/dashboard.component";

export default function PatientChartOverview(props: PatientChartOverviewProps) {
  const dashboardConfig: DashboardConfigType = {
    name: "overview",
    title: "Overview",
    layout: {
      columns: 4
    },
    widgets: [
      {
        name: "conditions-overview",
        component: ConditionsOverview,
        layout: { columnSpan: 2 }
      },
      {
        name: "programs-overview",
        component: ProgramsOverview,
        layout: { columnSpan: 2 }
      },
      {
        name: "notes-overview",
        component: NotesOverview,
        layout: { columnSpan: 4 }
      },
      {
        name: "vitals-overview",
        component: VitalsOverview,
        layout: { columnSpan: 2 }
      },
      {
        name: "height-and-weight-overview",
        component: HeightAndWeightOverview,
        layout: { columnSpan: 2 }
      },
      {
        name: "medications-overview",
        component: MedicationsOverview,
        layout: { columnSpan: 3 }
      },
      {
        name: "allergy-overview",
        component: AllergyOverview,
        layout: { columnSpan: 1 }
      }
    ]
  };

  const coreComponents = {
    conditions: ConditionsOverview,
    programs: ProgramsOverview,
    allergies: AllergyOverview,
    notes: NotesOverview,
    vitals: VitalsOverview,
    heightAndWeight: HeightAndWeightOverview,
    medications: MedicationsOverview
  };

  return <Dashboard dashboardConfig={dashboardConfig} />;
}

type PatientChartOverviewProps = {
  match: {};
};
