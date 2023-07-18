import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { User } from 'entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

const url = 'http://localhost:8000/login';
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post(url, {
        username,
        password,
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('login error');
    }
  },
);
