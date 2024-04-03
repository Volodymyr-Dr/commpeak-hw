import jobPositions from "@/mock-data/data.json";

interface JobPosition {
  title: string;
  location: string;
  team: string;
  type: string;
}

interface JobPositions {
  [key: string]: JobPosition;
}

export const getJobPositions = (): Promise<JobPositions> => {
  // Simulating API fetch
  return new Promise((resolve) => {
    const idTimer = setTimeout(() => {
      resolve(jobPositions);
      clearTimeout(idTimer);
    }, 200);
  });
};

export const getJobPosition = (id: string): Promise<JobPosition> => {
  // Simulating API fetch
  return new Promise((resolve) => {
    const idTimer = setTimeout(() => {
      resolve((jobPositions as JobPositions)[id]);
      clearTimeout(idTimer);
    }, 100);
  });
};
