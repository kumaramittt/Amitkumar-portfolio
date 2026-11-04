/**
 * Pure helper and logic functions for portfolio filtering and validation.
 */

import { Project, Skill } from '../data/portfolioData';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Please enter a subject (at least 3 characters).';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function filterProjects(projects: Project[], category: string): Project[] {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function filterSkills(skills: Skill[], category: string): Skill[] {
  if (!category || category === 'all') {
    return skills;
  }
  return skills.filter((skill) => skill.category === category);
}

export function formatSkillLevel(percentage: number): string {
  if (percentage >= 80) return 'Advanced';
  if (percentage >= 65) return 'Intermediate';
  return 'Beginner';
}
