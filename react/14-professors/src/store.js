import { configureStore } from "@reduxjs/toolkit";
import ProfessorSlice from "./slices/ProfessorSlice";
import DepartmentSlice from "./slices/DepartmentSlice";
import StudentSlice from "./slices/StudentSlice";
import TrafficSlice from "./slices/TrafficSlice";
const store = configureStore({
  reducer: { 
    ProfessorSlice: ProfessorSlice,
    DepartmentSlice: DepartmentSlice,
    StudentSlice: StudentSlice,
    TrafficSlice: TrafficSlice
  },
});
export default store;
