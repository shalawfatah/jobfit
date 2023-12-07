// store.js
import { writable } from 'svelte/store';

export const generalInfo = writable({
    name: '',
    phone: '',
    email: '',
    github: '',
    linkedin: '',
    portfolio: '',
    summary: ''
});

export let experienceState = writable({
    title: '',
    company: '',
    start_date: '',
    end_date: '',
    current: '',
})
export let projectState = writable({
        title: '',
        description: '',
        location: '',
        position: '',
        duration: '',
        live: '',
        code: '',
        stack: ''
    })