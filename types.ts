import React from 'react';

export interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}