import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type CoursItemType = {
  name: string
  popular: number
  favorite: number
  new: number
  imageURL: string
}

export interface CoursesState {
  courses: CoursItemType[]
}

const initialState: CoursesState = {
  courses: [
    {name: 'html',favorite: 34, new: 7, popular: 5, imageURL: ''},
    {name: 'css',favorite: 64, new: 6, popular: 4, imageURL: ''},
    {name: 'javascript',favorite: 84, new: 3, popular: 2, imageURL: ''},
    {name: 'php',favorite: 4, new: 87, popular: 14, imageURL: ''},
    {name: 'react',favorite: 2, new: 32, popular: 8, imageURL: ''},
    {name: 'angular',favorite: 8, new: 37, popular: 3, imageURL: ''},
    {name: 'vue',favorite: 5, new: 5, popular: 7, imageURL: ''},
    {name: 'laravel',favorite: 43, new: 9, popular: 11, imageURL: ''},
    {name: 'nodejs',favorite: 75, new: 3, popular: 1, imageURL: ''}
  ]
};


export const coursesSlice = createSlice({
  name: 'courses',
  initialState,

  reducers: {
    sortByPopular: (state) => {
      state.courses.sort((a: { popular: any; }, b: { popular: any; }) => {
        let fa = a.popular,
          fb = b.popular;
        if (fa < fb) { return -1; }
        if (fa > fb) { return 1; }
        return 0;
      }) 
    },
    sortByFavorite: (state) => {
      state.courses.sort((a: { favorite: any; }, b: { favorite: any; }) => {
        let fa = a.favorite,
          fb = b.favorite;
        if (fa < fb) { return -1; }
        if (fa > fb) { return 1; }
        return 0;
      }) 
    },
    sortByNew: (state) => {
      state.courses.sort((a: { new: any; }, b: { new: any; }) => {
        let fa = a.new,
          fb = b.new;
        if (fa < fb) { return -1; }
        if (fa > fb) { return 1; }
        return 0;
      }) 
    },
  },
  
});

export const selectCourses = (state: RootState) => state.courses.courses

export const { sortByPopular, sortByFavorite, sortByNew } = coursesSlice.actions;


export default coursesSlice.reducer;
