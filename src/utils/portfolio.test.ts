import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validateContactForm, filterProjects, formatSkillLevel } from './portfolio.js';
import { Project } from '../data/portfolioData.js';

test('validateEmail handles valid and invalid emails correctly', () => {
  assert.equal(validateEmail('amit@example.com'), true);
  assert.equal(validateEmail('amitkumar678793@gmail.com'), true);
  assert.equal(validateEmail('notanemail'), false);
  assert.equal(validateEmail('invalid@domain'), false);
  assert.equal(validateEmail('   '), false);
});

test('validateContactForm checks required fields and formats', () => {
  const invalidResult = validateContactForm({
    name: 'A',
    email: 'bad-email',
    subject: 'Hi',
    message: 'Short',
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.subject);
  assert.ok(invalidResult.errors.message);

  const validResult = validateContactForm({
    name: 'Amit Kumar',
    email: 'amit@example.com',
    subject: 'Project Collaboration',
    message: 'Hello Amit, I would love to discuss a web development project with you.',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('filterProjects filters properly by category', () => {
  const mockProjects: Project[] = [
    {
      id: 'p1',
      title: 'Project 1',
      category: 'web-apps',
      shortDescription: 'desc',
      longDescription: 'long',
      technologies: ['React'],
      image: '',
      demoUrl: '#',
      githubUrl: '#',
      features: [],
    },
    {
      id: 'p2',
      title: 'Project 2',
      category: 'frontend',
      shortDescription: 'desc',
      longDescription: 'long',
      technologies: ['HTML'],
      image: '',
      demoUrl: '#',
      githubUrl: '#',
      features: [],
    },
  ];

  assert.equal(filterProjects(mockProjects, 'all').length, 2);
  assert.equal(filterProjects(mockProjects, 'web-apps').length, 1);
  assert.equal(filterProjects(mockProjects, 'frontend').length, 1);
  assert.equal(filterProjects(mockProjects, 'fullstack').length, 0);
});

test('formatSkillLevel assigns correct labels', () => {
  assert.equal(formatSkillLevel(85), 'Advanced');
  assert.equal(formatSkillLevel(70), 'Intermediate');
  assert.equal(formatSkillLevel(50), 'Beginner');
});
