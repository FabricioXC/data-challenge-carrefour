from typing import Any, Dict, List
import tweepy
from src.secrets import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET


def tw_auth():
    auth = tweepy.OAuthHandler(consumer_key=CONSUMER_KEY, consumer_secret=CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

    return tweepy.API(auth)


def _get_trends(woeid: int) -> List[Dict[str, Any]]:
    """Get Twitter trending topics. 

    Args:
        woeid (int): Where On Earth IDentifier.

    Returns:
        List[Dict[str, Any]]: Trends list.
    """
    api = tw_auth() 
    trends = api.trends_place(woeid)

    return trends[0]['trends']

def get_collection_data_from_mongo(collection) -> List[Dict[str, Any]]:
    collection_data = collection.find({})
    return list(collection_data)

def check_data(collection_data):
    resp = True
    data = collection_data.find({})
    if not list(data):
        resp = False
    return resp


def save_data(collection_data, type, woe_id='none') -> None:
    data = collection_data.find({})

    if not list(data):
        if type == 'trends':
            data = _get_trends(woeid=woe_id)
            collection_data.insert_many(data)
