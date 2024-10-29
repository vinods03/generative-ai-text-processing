import json
import boto3

client_bedrock = boto3.client('bedrock-runtime')
client_s3 = boto3.client('s3')

def lambda_handler(event, context):
    
    print('The event is: ', event)
    
    prompt = event['prompt']
    print('The prompt is: ', prompt)
    
    # invoke the text summarization model using the above prompt
    # temperature – Use a lower value to decrease randomness in the response. minimum: 0, maximum: 5, default: 0.9
    # p – Use a lower value to ignore less probable options. Set to 0 or 1.0 to disable. If both p and k are enabled, p acts after k. minimum: 0, maximum: 1, default: 0.75
    # k – Specify the number of token choices the model uses to generate the next token. If both p and k are enabled, p acts after k. minimum: 0, maximum: 500, default: 0
    # max_tokens – Specify the maximum number of tokens to use in the generated response. minimum: 0, maximum: 4096, default: 20
    # stop_sequences – Configure up to four sequences that the model recognizes. After a stop sequence, the model stops generating further tokens. The returned text doesn't contain the stop sequence.
    response_bedrock = client_bedrock.invoke_model(
        contentType='application/json',
        accept='application/json',
        modelId='cohere.command-light-text-v14',
        body=json.dumps({'prompt':prompt, 'max_tokens':100, 'temperature':0.1, 'p': 0.1, 'k':0})
        )
    print('response_bedrock is: ', response_bedrock)
    
    # convert the response from bedrock which is a streaming body, into python object
    response_bedrock_byte = json.loads(response_bedrock['body'].read())
    print('response_bedrock_byte is: ', response_bedrock_byte)
    
    # response_bedrock_intmd = json.dumps(response_bedrock_byte)
    response_bedrock_final = response_bedrock_byte['generations'][0]['text']
    print('response_bedrock_final is: ', response_bedrock_final)
    
    return {
        'statusCode': 200,
        'body': response_bedrock_final
    }
    
# The json.loads() takes in a string and returns a python object and the json.dumps() takes in a Python object and returns a JSON string.