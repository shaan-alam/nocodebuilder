import { Component } from '@/types';
import { atom } from 'jotai'

export const componentsAtom = atom<Component[]>([]);

export const selectedNodeAtom = atom<Component | null>(null)