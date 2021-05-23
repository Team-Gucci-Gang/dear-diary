# Dear Diary

Keeping a diary has the ability to reduce our anxieties and settle our nerves in potentially stressful situations. To keep a diary of your thoughts and emotions surrounding situations you feel uncomfortable with, enables you to develop a sense of control and therefore reduce your anxiety.

## Description

Dear Diary is a web based journal that is like any other journal, except that it uses Natural Language Processing to gage the sentiments of the writer and log it on a calender, mapping it with colors and emojis. The user can, look back at the entries years later and get a sense of how they felt during the time.
Depression is a leading cause of disability worldwide and is a major contributor to the overall global burden of disease. Dear Diary can also be used as an early detection tool for depression and stress.
Our policy is to keep Dear Diary as unopinionated as possible. We provide the user with analytics and and statistics on their happiness quotient.

*We at Dear Diary aim to build a better, happier, more introspective future!*

## Setup and installation

- [ ] Clone the repository on your system by running the command <br/>
      `git clone https://github.com/Team-Gucci-Gang/dear-diary.git`

- [ ] `cd dear-diary`

- [ ] Install dependencies <br/>
      `npm install` <br/>
      `cd client` <br/>
      `npm install`

- [ ] Modify your environment variables

  - [ ] For Windows:

    - [ ] Open Control Panel
    - [ ] Go to System Settings
    - [ ] Advanced System Settings
    - [ ] Environment Variables...
    - [ ] Add a new variable, with name GOOGLE_APPLICATION_CREDENTIALS
    - [ ] Set file path to \<path-to-the-project-directory\>/dear-diary/config/dear-diary.json
    - [ ] Restart your PC

  - [ ] For MAC:

    - [ ] Add the following at the end of your ~/.bash_profile<br/> `export GOOGLE_APPLICATION_CREDENTIALS="<path-to-the-project-directory>/dear-diary/config/dear-diary.json"`

    - [ ] Run `source ~/.bash_profile` in the terminal.

  - [ ] For Ubuntu:

    - [ ] Add the following at the end of your ~/.bashrc<br/> `export GOOGLE_APPLICATION_CREDENTIALS="<path-to-the-project-directory>/dear-diary/config/dear-diary.json"`

    - [ ] Run `source ~/.bashrc` in the terminal.

## Install the following browser extensions:-

- [ ] Redux DevTools
- [ ] React Developer Tools

## To run the frontend and backend together :-

- [ ] `npm run dev`

## To run only the server

- [ ] `npm run server`

## To run only the frontend React app:-

- [ ] `npm run client`

## Navigate to the testing route

Navigate to
`<backend-domain-name>/testing` <br/>
(For development, `<backend-domain-name>` is localhost:5000)