# 🚀 JavaScript Practice Problems - Complete Guide

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Problem Solving](https://img.shields.io/badge/Problem_Solving-FF6B6B?style=for-the-badge&logo=codechef&logoColor=white)
![Practice](https://img.shields.io/badge/Practice-4ECDC4?style=for-the-badge&logo=exercism&logoColor=white)

---

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Project Structure](#-project-structure)
3. [Problem Categories](#-problem-categories)
4. [Problem-Solving Methodology](#-problem-solving-methodology)
5. [Coding Standards](#-coding-standards)
6. [How to Use This Repository](#-how-to-use-this-repository)
7. [Problem Templates](#-problem-templates)
8. [Best Practices](#-best-practices)
9. [Progress Tracking](#-progress-tracking)
10. [Resources](#-resources)

---

## 🎯 Overview

This repository contains a curated collection of JavaScript practice problems designed to enhance programming skills and problem-solving abilities. Each problem is structured to provide:

- **Clear problem statements**
- **Multiple solution approaches**
- **Time and space complexity analysis**
- **Test cases and examples**
- **Best practices implementation**

### 🎨 Learning Objectives

- **Master JavaScript fundamentals** and advanced concepts
- **Develop algorithmic thinking** and problem-solving skills
- **Learn multiple approaches** to solve the same problem
- **Understand time and space complexity** optimization
- **Practice clean code** and professional coding standards

---

## 📁 Project Structure

```
Javascript Nuggets/
├── index.html                 # Main landing page
├── index.js                   # Main JavaScript file
├── style.css                  # Styling for demo pages
├── readme.md                  # Project documentation
├── PROBLEM_SOLVING_GUIDE.md   # This comprehensive guide
├── 01-map/                    # Array mapping problems
│   ├── problem/               # Problem statements
│   │   ├── 01_problem.js      # Problem 1 description
│   │   └── 02_problem.js      # Problem 2 description
│   └── solve/                 # Solutions
│       ├── 01_solve.js        # Solution 1
│       └── 02_solve.js        # Solution 2
├── 02-object/                 # Object manipulation problems
│   ├── problem/
│   │   ├── 01_problem.js
│   │   └── 02_problem.js
│   └── solve/
│       ├── 01_solve.js
│       └── 02_solve.js
└── [Additional Categories]/   # Future problem categories
```

---

## 🗂️ Problem Categories

### **Current Categories**

#### 1. 📊 **Array Mapping (01-map/)**

- **Focus**: Array transformation and manipulation
- **Concepts**: map(), filter(), reduce(), forEach()
- **Difficulty**: Beginner to Intermediate
- **Skills Developed**:
  - Array methods mastery
  - Functional programming concepts
  - Data transformation techniques

#### 2. 🔧 **Object Manipulation (02-object/)**

- **Focus**: Object operations and property handling
- **Concepts**: Object methods, destructuring, property access
- **Difficulty**: Beginner to Intermediate
- **Skills Developed**:
  - Object-oriented programming
  - Data structure manipulation
  - Property iteration and modification

### **Planned Categories**

| Category                    | Focus Area                       | Difficulty            | Status         |
| --------------------------- | -------------------------------- | --------------------- | -------------- |
| **03-algorithms/**          | Sorting, Searching, Recursion    | Intermediate-Advanced | 🚧 Coming Soon |
| **04-async/**               | Promises, Async/Await, Callbacks | Intermediate          | 🚧 Coming Soon |
| **05-dom/**                 | DOM Manipulation, Events         | Beginner-Intermediate | 🚧 Coming Soon |
| **06-functions/**           | Higher-order functions, Closures | Intermediate          | 🚧 Coming Soon |
| **07-data-structures/**     | Arrays, Objects, Sets, Maps      | Intermediate-Advanced | 🚧 Coming Soon |
| **08-string-manipulation/** | String methods, RegEx            | Beginner-Intermediate | 🚧 Coming Soon |

---

## 🔍 Problem-Solving Methodology

### **Step-by-Step Approach**

#### 1. **🎯 Understand the Problem**

- Read the problem statement carefully
- Identify input and output requirements
- Understand constraints and edge cases
- Ask clarifying questions (if applicable)

#### 2. **📝 Plan the Solution**

- Break down the problem into smaller parts
- Choose the appropriate data structures
- Outline the algorithm step-by-step
- Consider multiple approaches

#### 3. **💻 Implement the Solution**

- Start with a basic working solution
- Focus on correctness first
- Add comments for clarity
- Handle edge cases

#### 4. **🧪 Test and Validate**

- Test with provided examples
- Test edge cases
- Verify the logic
- Check for potential bugs

#### 5. **⚡ Optimize**

- Analyze time and space complexity
- Look for optimization opportunities
- Refactor for better readability
- Consider alternative approaches

#### 6. **📚 Document and Reflect**

- Add comprehensive comments
- Document the approach used
- Note lessons learned
- Identify areas for improvement

---

## 📋 Coding Standards

### **File Naming Convention**

```
problem/
├── 01_problem.js          # Problem description and requirements
├── 02_problem.js          # Sequential numbering
└── ...

solve/
├── 01_solve.js            # Corresponding solution
├── 02_solve.js            # Multiple approaches if needed
└── ...
```

### **Code Structure Template**

```javascript
/**
 * PROBLEM: [Problem Title]
 *
 * DESCRIPTION:
 * [Detailed problem description]
 *
 * EXAMPLES:
 * Input: [example input]
 * Output: [example output]
 *
 * CONSTRAINTS:
 * - [constraint 1]
 * - [constraint 2]
 *
 * APPROACH:
 * [Description of the solution approach]
 *
 * TIME COMPLEXITY: O(n)
 * SPACE COMPLEXITY: O(1)
 */

function solutionFunction(input) {
  // Step 1: [Description]

  // Step 2: [Description]

  // Step 3: [Description]

  return result;
}

// Test cases
console.log(solutionFunction(testInput1)); // Expected: [expected output]
console.log(solutionFunction(testInput2)); // Expected: [expected output]

// Alternative approaches (if applicable)
function alternativeSolution(input) {
  // Different approach implementation
}
```

---

## 📖 How to Use This Repository

### **For Beginners**

1. **Start with Category 01-map/** (Array problems)
2. **Read the problem statement** in `problem/01_problem.js`
3. **Try solving it yourself** before looking at solutions
4. **Compare your solution** with the provided solution
5. **Understand the approach** and complexity analysis

### **For Intermediate Developers**

1. **Choose problems** based on specific skill areas
2. **Focus on optimization** and multiple approaches
3. **Analyze time and space complexity**
4. **Practice writing clean, professional code**

### **For Advanced Developers**

1. **Contribute new problems** and solutions
2. **Add alternative approaches** to existing problems
3. **Help improve documentation**
4. **Mentor others** through code reviews

---

## 📄 Problem Templates

### **Problem Statement Template**

```javascript
/**
 * PROBLEM: [Clear, concise title]
 *
 * DESCRIPTION:
 * [Detailed description of what needs to be solved]
 *
 * EXAMPLES:
 * Example 1:
 * Input: [input]
 * Output: [output]
 * Explanation: [why this output]
 *
 * Example 2:
 * Input: [input]
 * Output: [output]
 *
 * CONSTRAINTS:
 * - [constraint 1]
 * - [constraint 2]
 *
 * DIFFICULTY: [Beginner/Intermediate/Advanced]
 * CATEGORY: [Array/Object/Algorithm/etc.]
 */

// TODO: Implement your solution here
```

### **Solution Template**

```javascript
/**
 * SOLUTION: [Problem Title]
 *
 * APPROACH:
 * [Explanation of the solution strategy]
 *
 * ALGORITHM:
 * 1. [Step 1]
 * 2. [Step 2]
 * 3. [Step 3]
 *
 * TIME COMPLEXITY: O(?)
 * SPACE COMPLEXITY: O(?)
 */

function solve(input) {
  // Implementation here
}

// Test cases
function runTests() {
  console.log('Test 1:', solve(test1), 'Expected:', expected1);
  console.log('Test 2:', solve(test2), 'Expected:', expected2);
}

runTests();
```

---

## ✅ Best Practices

### **Code Quality**

- ✅ Write **clear, descriptive variable names**
- ✅ Add **meaningful comments** explaining logic
- ✅ Use **consistent formatting** and indentation
- ✅ Handle **edge cases** appropriately
- ✅ Follow **JavaScript best practices**

### **Problem-Solving**

- ✅ **Understand before coding** - read the problem multiple times
- ✅ **Start simple** - get a working solution first
- ✅ **Test frequently** - verify your logic at each step
- ✅ **Think of edge cases** - empty inputs, large inputs, etc.
- ✅ **Optimize gradually** - improve time/space complexity

### **Learning Approach**

- ✅ **Practice regularly** - consistency is key
- ✅ **Learn from solutions** - understand different approaches
- ✅ **Explain your code** - teaching others reinforces learning
- ✅ **Track progress** - maintain a learning log
- ✅ **Challenge yourself** - gradually increase difficulty

---

## 📊 Progress Tracking

### **Skills Assessment Matrix**

| Skill Area              | Beginner | Intermediate | Advanced | Mastered |
| ----------------------- | -------- | ------------ | -------- | -------- |
| **Array Methods**       | 🟡       | 🟢           | ⚪       | ⚪       |
| **Object Manipulation** | 🟡       | 🟡           | ⚪       | ⚪       |
| **Algorithms**          | 🔴       | ⚪           | ⚪       | ⚪       |
| **Async Programming**   | 🔴       | ⚪           | ⚪       | ⚪       |
| **DOM Manipulation**    | 🔴       | ⚪           | ⚪       | ⚪       |

**Legend**: 🔴 Not Started | 🟡 In Progress | 🟢 Completed | ⚪ Not Applicable

### **Problem Completion Tracker**

#### **01-map/ (Array Problems)**

- [ ] Problem 1: [Problem Title]
- [ ] Problem 2: [Problem Title]

#### **02-object/ (Object Problems)**

- [ ] Problem 1: [Problem Title]
- [ ] Problem 2: [Problem Title]

---

## 📚 Resources

### **JavaScript Fundamentals**

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

### **Problem-Solving Platforms**

- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Codewars](https://www.codewars.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

### **Advanced Topics**

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

---

## 🤝 Contributing

### **How to Add New Problems**

1. **Create a new category folder** (if needed)
2. **Follow the naming convention**
3. **Use the problem template**
4. **Provide comprehensive solutions**
5. **Include test cases**
6. **Update this documentation**

### **Contribution Guidelines**

- ✅ **Clear problem statements**
- ✅ **Multiple solution approaches** (when applicable)
- ✅ **Proper documentation**
- ✅ **Test cases included**
- ✅ **Follow coding standards**

---

## 📈 Learning Path Recommendations

### **Beginner Path** (1-2 months)

1. **Week 1-2**: Array methods and basic loops
2. **Week 3-4**: Object manipulation and properties
3. **Week 5-6**: Functions and scope
4. **Week 7-8**: DOM manipulation basics

### **Intermediate Path** (2-3 months)

1. **Month 1**: Advanced array/object operations
2. **Month 2**: Asynchronous programming
3. **Month 3**: Algorithm fundamentals

### **Advanced Path** (3-6 months)

1. **Months 1-2**: Complex algorithms and data structures
2. **Months 3-4**: Design patterns and architecture
3. **Months 5-6**: Performance optimization and advanced concepts

---

<div align="center">

## 🚀 Happy Coding!

**Remember**: _The key to mastering JavaScript is consistent practice and never stop learning!_

[![Practice](https://img.shields.io/badge/Practice_Makes-Perfect-success?style=for-the-badge)](.)
[![Learning](https://img.shields.io/badge/Keep-Learning-blue?style=for-the-badge)](.)

</div>

---

_Last Updated: September 23, 2025_
_Maintained by: [Nayem Islam](https://github.com/nayem707)_
