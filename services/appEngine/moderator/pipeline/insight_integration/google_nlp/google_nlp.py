from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
class GoogleNLP:
    def __init__(self, model_records):
        #TODO: implement validate record
        self.googleNLPClient = language.LanguageServiceClient()
        self.allow_features = { 'extract_syntax': True, 
                                'extract_entities': True,
                                'extract_document_sentiment': True, 
                                'extract_entity_sentiment': True,
                                'classify_text': True }
    def get_sentiment(self, google_response):
        sentiment = dict({'document':dict()})
        document_sentiment = google_response.document_sentiment
        sentiment['document'].update({'score':document_sentiment.score})
        sentiment['document'].update({'magnitude':document_sentiment.magnitude})
        return sentiment
    def get_entity_sentiment(self, google_response):
        entity_sentiment = dict({'entities':list()})
        entities = google_response.entities
        for entity in entities:
            entity_sentiment['entities'].append(dict(
                           {'name': str(entity.name), 
                            'magnitude':float(entity.sentiment.magnitude),
                            'score': float(entity.sentiment.score) }))
        return entity_sentiment
    def get_entities(self, google_response):
        entities = dict({'entities':list()})
        _entities = google_response.entities
        for entity in _entities:
            entities['entities'].append(dict(
                           {'name': str(entity.name),
                            #TODO: extract the correct type name 
                            'type': str(entity.type),
                            #TODO: consider to get metadata
                            #'metadata': str(entity.metadata),
                            'salience': float(entity.salience) }))
        return entities
    def get_syntax(self, google_response):
        syntax = dict({'tokens':list()})
        tokens = google_response.tokens
        for token in tokens:
            syntax['tokens'].append(dict(
                           {'text': str(token.text.content), 
                            'lemma': str(token.lemma),
                            'part_of_speech': str(token.part_of_speech)}))
        return syntax
    def get_syntax(self, google_response):
        syntax = dict({'tokens':list()})
        tokens = google_response.tokens
        for token in tokens:
            syntax['tokens'].append(dict(
                           {'text': str(token.text.content), 
                            'lemma': str(token.lemma),
                            'part_of_speech': str(token.part_of_speech)}))
        return syntax
    def get_classify_text(self, google_response):
        classify_text = dict({'categories':list()})
        categories = google_response.categories
        for category in categories:
            classify_text['categories'].append(dict(
                           {'name': str(category.name), 
                            'confidence': float(category.confidence)}))
        return classify_text
    def predict(self, content, request_features=None):
        document = types.Document(content=content, type=enums.Document.Type.PLAIN_TEXT)
        request_features = self.allow_features.keys() if request_features is None else list(request_features)
        request_features = dict([(feature, True) for feature in request_features 
                                                        if self.allow_features[feature]])
        insight_results = request_features
        if request_features.get('classify_text', True):
            request_features['classify_text'] = False
            resp = self.googleNLPClient.annotate_text(document=document, features=request_features)
            try:
                request_features['classify_text'] = True
                resp = self.googleNLPClient.annotate_text(document=document, features=request_features)
            except:
                #TODO: try to avoid too short text checking for classify text, should be improve
                pass
        insight_results['language'] = str(resp.language)
        if insight_results.get('extract_document_sentiment', False):
            sentiment = self.get_sentiment(resp)
            print(sentiment)
            insight_results['extract_document_sentiment'] = sentiment
        if insight_results.get('extract_entity_sentiment', False):
            entity_sentiments = self.get_entity_sentiment(resp)
            print(entity_sentiments)
            insight_results['extract_entity_sentiment'] = entity_sentiments
        if insight_results.get('extract_entities', False):
            entities = self.get_entities(resp)
            print(entities)
            insight_results['extract_entities'] = entities
        if insight_results.get('extract_syntax', False):
            syntax = self.get_syntax(resp)
            print(syntax)
            insight_results['extract_syntax'] = syntax
        if insight_results.get('classify_text', False):
            categories = self.get_classify_text(resp)
            print(categories)
            insight_results['classify_text'] = categories
        return insight_results
    def save():
        return None
    def load():
        return None
    def train():
        return None

if __name__ == "__main__":
    g = GoogleNLP({})
    g.predict('this is text')
