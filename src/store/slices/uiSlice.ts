import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UiState {
  isSideMenuOpen: boolean,
  isModalOpen: boolean,
}

const initialState: UiState = {
  isSideMenuOpen: false,
  isModalOpen: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const {} = uiSlice.actions

export default uiSlice;