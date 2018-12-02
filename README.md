#this is moderator.ai repository
#install
## install functions (require firebae)
`cd services` 
`yarn install` or `npm install`
## install AppEngine (require google cloud cli)
`cd appEnginee`

#develop
##code structure
\
    \client( frontend code )
    \services( backend code )
        \appEngine (AppEngine based services)
            \autoML (for auto hyperparameters generating for model or deep net)
            \deployment (for deploy)
            \integration (for third parties ML) 
            \preprocessing-pipeline (for preprocessing data)
            \training-pipeline (for training models defined in pipeline)
        \functions (Function based service)
    \tests (jest based testsuits)

###Test