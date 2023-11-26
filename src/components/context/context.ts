import { createContext } from 'react';

export interface CombinedContext {}

const combinedContext: CombinedContext = {};

/**
 * @desc [createContext] method for creating context.
 */
const context = createContext<CombinedContext>({ ...combinedContext });

export default context;
