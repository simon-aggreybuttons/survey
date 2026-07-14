from django.test import TestCase

from .models import Question, Survey
from .services import save_survey_responses


class SurveyResponseStorageTests(TestCase):
    def test_save_survey_responses_updates_existing_answers_without_duplicates(self):
        survey = Survey.objects.create(status='in_progress')
        question = Question.objects.create(number=1, title='Sector', question_type='radio', required=True)

        answers = {str(question.id): 'Telecommunications'}
        save_survey_responses(survey, answers)
        save_survey_responses(survey, answers)

        self.assertEqual(survey.responses.count(), 1)
        self.assertEqual(survey.responses.get(question=question).answer, 'Telecommunications')
