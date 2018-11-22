
#!/bin/sh
#environment detection
#TODO: detect env into one of ['linux', 'mac', 'win']
ENV='linux'

echo "setup moderator, please choose one option belowed "
echo "1. install backend "
while :
do
  read INPUT_OPTION
  case $INPUT_OPTION in
	1)
		echo "setup backend!"
        echo "link specs"
        ln -s $(pwd)/specs/ services/MLController/specs
		;;
	2)
		echo "See you again!"
		break
		;;
	*)
		echo "Sorry, I don't understand"
		;;
  esac
done
echo 
echo "That's all folks!"