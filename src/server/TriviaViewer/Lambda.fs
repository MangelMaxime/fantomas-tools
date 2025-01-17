module TriviaViewer.Lambda

open System.Net
open Amazon.Lambda.APIGatewayEvents
open Amazon.Lambda.Core
open AWSLambdaExtensions
open HttpConstants
open TriviaViewer.GetTrivia

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[<assembly: LambdaSerializer(typeof<Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer>)>]
()

let GetVersion (_request: APIGatewayProxyRequest) (_context: ILambdaContext) =
    let version = getVersion ()
    mkAPIGatewayProxyResponse (HttpStatusCode.OK, HeaderValues.TextPlain, version)

let GetTrivia (request: APIGatewayProxyRequest) (_context: ILambdaContext) =
    let triviaResponse = getTrivia request.Body

    let responseData =
        match triviaResponse with
        | GetTriviaResponse.Ok body -> HttpStatusCode.OK, HeaderValues.ApplicationJson, body
        | GetTriviaResponse.BadRequest body -> HttpStatusCode.BadRequest, HeaderValues.ApplicationText, body

    mkAPIGatewayProxyResponse responseData
