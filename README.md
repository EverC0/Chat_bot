## Why?

The "Explore Sleep Quality" project is focused on creating a web application that helps users predict and improve their sleep quality based on various health and lifestyle factors. The core idea is to provide a personalized experience where users can input data about their daily activities, such as physical exercise and steps taken, and receive a prediction of their sleep quality on a scale of 1-10.

run the development server:
    npm run dev

<!-- ## Learned? -->


rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/Maryland-Ever-mdp.pem" \
. ubuntu@ec2-3-92-185-216.compute-1.amazonaws.com:~/app So I should run this in web app folder so that all folders except .git, .env are excluded.

ssh -i "Maryland-Ever-mdp.pem" ubuntu@ec2-3-92-185-216.compute-1.amazonaws.com