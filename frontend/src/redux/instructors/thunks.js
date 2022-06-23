import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import InstructorService from './service';

export const getInstructorsAsync = createAsyncThunk(
  actionTypes.GET_INSTRUCTORS,
  async () => {
    return await InstructorService.getInstructors();
  }
);

export const addInstructorAsync = createAsyncThunk(
  actionTypes.ADD_INSTRUCTOR,
  async (name) => {
    return await InstructorService.addInstructor({ name });
  }
);

export const getFiltersAsync = createAsyncThunk(
  actionTypes.GET_FILTER,
  async () => {
    return await InstructorService.getFilter();
  }
);

export const updateFilterAsync = createAsyncThunk(
  actionTypes.UPDATE_FILTER,
  async ({id}) => {
    return await InstructorService.updateFilter({ id });
  }
);