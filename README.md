# Chai CSS Engine 

A lightweight utility-first CSS engine built using JavaScript.

This project allows users to write custom utility classes like chai-p-10, chai-bg-red, etc., which are dynamically converted into inline styles.

## Features
- Dynamic class parsing
- Spacing (padding, margin)
- Colors (background, text)
- Flex and Grid utilities
- Positioning (top, left, etc.)
- Hover effects
- Border and shadow support

## Example

chai-p-10 → padding: 10px  
chai-bg-red → background-color: red  
chai-d-flex → display: flex  
chai-gd-cols-2 → grid-template-columns: repeat(2, 1fr)

## How it works
- The script scans all DOM elements after page load
- Identifies classes starting with chai-
- Parses the class name into utility and value
- Applies corresponding inline styles dynamically
