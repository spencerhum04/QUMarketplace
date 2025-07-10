import '@testing-library/jest-dom';

// Polyfill TextEncoder/TextDecoder for Jest test environment
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
