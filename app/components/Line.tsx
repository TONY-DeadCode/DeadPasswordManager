"use client";

import React, { Component } from 'react'

export class Line extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="30"
        viewBox="0 0 2 50"
        fill="none"
      >
        <path d="M1 0V50" stroke="white" />
      </svg>
    )
  }
}

export default Line