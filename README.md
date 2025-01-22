# TypeScript Type Safety Bug

This repository demonstrates a common type safety issue in TypeScript when working with arrays.  The `printAllNumbers` function intends to print only numbers, but lacks robust type checking, leading to potential runtime errors if the input array contains non-number elements.

The `bug.ts` file shows the problematic code, while `bugSolution.ts` provides a corrected version with enhanced type safety.

## Bug Description

The original code iterates through the input array using a for loop and accesses each element directly using its index.  If the array contains any elements that aren't numbers (e.g., strings, booleans), accessing them with `numbers[i]` will cause a runtime error.  TypeScript's type system doesn't prevent this at compile time because the type checking isn't thorough enough. 

## Solution

The solution utilizes more robust type checking and error handling. The improved code checks the type of each element before attempting to process it, preventing potential runtime errors and improving type safety.