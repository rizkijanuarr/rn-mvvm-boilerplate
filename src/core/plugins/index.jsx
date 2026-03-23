/**
 * Plugins Entry Point
 * Consolidate all third-party libraries and core modules here.
 */


export { 
  default as React, 
  useState, 
  useCallback, 
  useEffect, 
  useMemo, 
  useRef, 
  useContext, 
  useReducer, 
  useLayoutEffect 
} from 'react';
export * from 'react';

// 1. Core React Native

export * from 'react-native';

// 2. Navigation
export * from '@react-navigation/native';
export * from '@react-navigation/native-stack';

// 3. State Management (Zustand)
export * from 'zustand';

// 4. Other Plugins
export * from 'react-native-bootsplash';
export * from 'react-native-safe-area-context';
export * from 'react-native-screens';
