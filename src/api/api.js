// Use for talking to MasterCSBE
import axios from "axios"

const baseURL = "http://127.0.0.1:3001/api/"

export function getIntroQuiz() {
    return axios.get(baseURL + 'IntroQuiz', {
        timeout: 3000,
    })
}

export function updateIntroQuizResult(id, type, recommended) {
    return axios.get(baseURL + 'updateIntroQuizResult', {
        params: {
            id,
            type,
            recommended,
        },
        timeout: 3000,
    })
}

export function getAllCources() {
    return axios.get(baseURL + 'getAllcourses', {
        timeout: 3000,
    })
}

export function getCourseQuizzes(CourseID, ChapterID) {
    return axios.get(baseURL + 'getCourseQuizzes', {
        params: {
            CourseID,
            ChapterID,
        },
        timeout: 3000,
    })
}

export function updateQuizScores(UserID, ChapterID, Score) {
    return axios.get(baseURL + 'updateQuizScores', {
        params: {
            UserID,
            ChapterID,
            Score,
        },
        timeout: 3000,
    })
}

export function getChapterInfo(CourseID) {
    return axios.get(baseURL + 'ChapterInfo', {
        params: {
            CourseID,
        },
        timeout: 3000,
    })
}

export function getScores(UserID,CourseID) {
    return axios.get(baseURL + 'Scores', {
        params: {
            UserID,
            CourseID,
        },
        timeout: 5000,
    })
}

export function submitFeedback(CourseID,Feedback) {
    return axios.get(baseURL + 'submitFeedback', {
        params: {
            CourseID,
            Feedback,
        },
        timeout: 5000,
    })
}

export function getReference(CourseID,ChapterID) {
    return axios.get(baseURL + 'getReference', {
        params: {
            CourseID,
            ChapterID,
        },
        timeout: 5000,
    })
}

export function getVideo(CourseID,ChapterID) {
    return axios.get(baseURL + 'getVideo', {
        params: {
            CourseID,
            ChapterID,
        },
        timeout: 5000,
    })
}

export function getChapterName(ChapterID) {
    return axios.get(baseURL + 'getChapterName', {
        params: {
            ChapterID,
        },
        timeout: 5000,
    })
}