
make_moderator_link()
{
    ln -s $(pwd)/moderator $1/Function/
}

echo 'make link '
make_moderator_link 'nlp-integration'

deloy_moderator()
{
    firebase deploy
}