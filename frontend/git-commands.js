export const commands = [
  {
    name: "git init",
    description: "Initialize a new Git repository in the current directory.",
    category: "Setting Up a Repository",
    tags: ["git", "repository"],
  },
  {
    name: "git clone {url} {new directory name}",
    description:
      "Clone an existing repository from the given URL into a new directory specified.",
    category: "Setting Up a Repository",
    tags: ["git", "clone"],
  },
  {
    name: "git clone {url}",
    description:
      "Clone an existing repository from the given URL into the current directory.",
    category: "Setting Up a Repository",
    tags: ["git", "clone"],
  },
  {
    name: "git add {file name}",
    description:
      "Add the specified file to the staging area, preparing it for a commit.",
    category: "Saving Changes",
    tags: ["git", "add", "staging"],
  },
  {
    name: "git add .",
    description:
      "Add all changed files in the current directory and its subdirectories to the staging area.",
    category: "Saving Changes",
    tags: ["git", "add", "staging"],
  },
  {
    name: "git add '*{file type}'",
    description:
      "Add all files of the specified type to the staging area. For example, 'git add *.txt' adds all text files.",
    category: "Saving Changes",
    tags: ["git", "add", "staging"],
  },
  {
    name: "git add {directory}",
    description: "Stage all changes of files within the specified directory.",
    category: "Saving Changes",
    tags: ["git", "add", "staging"],
  },
  {
    name: "git reset HEAD {file name}",
    description:
      "Unstage the specified file, making it the same as the last commit.",
    category: "Saving Changes",
    tags: ["git", "reset", "unstage"],
  },
  {
    name: "git reset {commit ID}",
    description:
      "Reset the working directory to match the state at the specified commit.",
    category: "Saving Changes",
    tags: ["git", "reset", "commit"],
  },
  {
    name: "git commit",
    description:
      "Open the default text editor to write a commit message for the staged changes.",
    category: "Saving Changes",
    tags: ["git", "commit"],
  },
  {
    name: "git commit -m '{commit message}'",
    description:
      "Commit the staged changes with a message specified directly in the command line.",
    category: "Saving Changes",
    tags: ["git", "commit"],
  },
  {
    name: "git commit -a -m '{commit message}'",
    description:
      "Automatically stage all modified and deleted files, then commit with the specified message.",
    category: "Saving Changes",
    tags: ["git", "commit", "stage"],
  },
  {
    name: "git diff",
    description:
      "Display changes between the working directory and the staging area.",
    category: "Saving Changes",
    tags: ["git", "diff"],
  },
  {
    name: "git diff --staged",
    description:
      "Show differences between the staged changes and the last commit.",
    category: "Saving Changes",
    tags: ["git", "diff", "staged"],
  },
  {
    name: "git diff {commit id 1} {commit id 2}",
    description: "Compare the changes between two specified commits.",
    category: "Saving Changes",
    tags: ["git", "diff", "commit"],
  },
  {
    name: "git diff HEAD",
    description:
      "Show changes between the working directory and the last commit.",
    category: "Saving Changes",
    tags: ["git", "diff", "HEAD"],
  },
  {
    name: "git clean -n",
    description:
      "Perform a dry run of the clean operation, showing which files would be deleted without actually deleting them.",
    category: "Undoing Changes",
    tags: ["git", "clean", "dry run"],
  },
  {
    name: "git clean -f",
    description: "Delete untracked files from the working directory.",
    category: "Undoing Changes",
    tags: ["git", "clean"],
  },
  {
    name: "git clean -d",
    description: "Remove untracked directories from the working directory.",
    category: "Undoing Changes",
    tags: ["git", "clean", "directories"],
  },
  {
    name: "git revert HEAD",
    description:
      "Revert the most recent commit, creating a new commit with the opposite changes.",
    category: "Undoing Changes",
    tags: ["git", "revert", "HEAD"],
  },
  {
    name: "git revert {commit ID}",
    description:
      "Revert the changes made by the specified commit, creating a new commit with the opposite changes.",
    category: "Undoing Changes",
    tags: ["git", "revert", "commit"],
  },
  {
    name: "git revert {commit ID} --no-edit",
    description:
      "Revert the specified commit without opening the editor for a commit message.",
    category: "Undoing Changes",
    tags: ["git", "revert", "commit"],
  },
  {
    name: "git commit --amend -m '{new commit message}'",
    description: "Modify the message of the most recent commit.",
    category: "Undoing Changes",
    tags: ["git", "commit", "amend"],
  },
  {
    name: "git commit --amend --no-edit",
    description:
      "Amend the most recent commit without changing the commit message.",
    category: "Undoing Changes",
    tags: ["git", "commit", "amend"],
  },
  {
    name: "git commit --amend",
    description: "Amend the most recent commit with the new staged changes.",
    category: "Undoing Changes",
    tags: ["git", "commit", "amend"],
  },
  {
    name: "git remote",
    description: "Display the list of remote repositories.",
    category: "Collaborating and Syncing",
    tags: ["git", "remote"],
  },
  {
    name: "git remote -v",
    description: "Display the URLs of the remote repositories.",
    category: "Collaborating and Syncing",
    tags: ["git", "remote", "URL"],
  },
  {
    name: "git remote add origin {github url}",
    description: "Add a remote repository with the specified URL.",
    category: "Collaborating and Syncing",
    tags: ["git", "remote", "add"],
  },
  {
    name: "git remote {url} {branch name}",
    description: "Update the remote repository's URL for a specific branch.",
    category: "Collaborating and Syncing",
    tags: ["git", "remote", "update"],
  },
  {
    name: "git remote rm {remote repo name}",
    description: "Remove the specified remote repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "remote", "remove"],
  },
  {
    name: "git remote rename {remote repo name} {new name}",
    description: "Rename an existing remote repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "remote", "rename"],
  },
  {
    name: "git fetch {remote repo name}",
    description: "Fetch all branches from the specified remote repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "fetch"],
  },
  {
    name: "git fetch {remote repo name} {branch}",
    description:
      "Fetch all commits from the specified branch of the remote repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "fetch", "branch"],
  },
  {
    name: "git fetch --dry-run",
    description:
      "Preview changes from the remote repository without applying them to the local repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "fetch", "dry run"],
  },
  {
    name: "git pull {remote repo}",
    description:
      "Pull changes from the specified remote repository into the local repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "pull"],
  },
  {
    name: "git pull {remote repo}/{branch name}",
    description:
      "Pull changes from the specified branch of the remote repository into the local repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "pull", "branch"],
  },
  {
    name: "git pull --rebase {remote repo}",
    description:
      "Fetch changes from the remote repository and rebase them onto the local branch.",
    category: "Collaborating and Syncing",
    tags: ["git", "pull", "rebase"],
  },
  {
    name: "git push {remote repo} {branch name}",
    description:
      "Push commits from the local repository to the specified branch of the remote repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "push", "branch"],
  },
  {
    name: "git push {remote repo} --all",
    description:
      "Push commits from all local branches to the remote repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "push", "all branches"],
  },
  {
    name: "git push {remote repo} --tags",
    description: "Push all local tags to the remote repository.",
    category: "Collaborating and Syncing",
    tags: ["git", "push", "tags"],
  },
  {
    name: "git shortlog",
    description: "Display a summary of commit activity grouped by author.",
    category: "Inspecting a Repository",
    tags: ["git", "shortlog"],
  },
  {
    name: "git shortlog -s -n",
    description:
      "Show a summary of commits by author, sorted by the number of commits.",
    category: "Inspecting a Repository",
    tags: ["git", "shortlog"],
  },
  {
    name: "git log",
    description: "Show the entire commit history of the repository.",
    category: "Inspecting a Repository",
    tags: ["git", "log"],
  },
  {
    name: "git log --stat",
    description:
      "Show the commit history along with the files modified in each commit.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "stat"],
  },
  {
    name: "git log --graph",
    description: "Visualize the branch history with a graph of commits.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "graph"],
  },
  {
    name: "git log --graph --oneline",
    description:
      "Show a condensed graph of the commit history with one line per commit.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "graph", "oneline"],
  },
  {
    name: "git log -n {number}",
    description: "Display the specified number of most recent commits.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "recent commits"],
  },
  {
    name: "git log -p {commit id}",
    description: "Show the changes introduced in the specified commit.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "patch"],
  },
  {
    name: "git log --author={name}",
    description: "Filter commits by the specified author's name.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "author"],
  },
  {
    name: 'git log --grep="{search term}"',
    description:
      "Show commits that contain the specified search term in the commit message.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "search"],
  },
  {
    name: 'git log --after="{date}"',
    description: "Show commits made after the specified date.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "date"],
  },
  {
    name: 'git log --before="{date}"',
    description: "Show commits made before the specified date.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "date"],
  },
  {
    name: 'git log --after="{date}" --before="{date}"',
    description: "Show commits made between the specified dates.",
    category: "Inspecting a Repository",
    tags: ["git", "log", "date range"],
  },
  {
    name: "git branch",
    description: "List all branches in the repository.",
    category: "Using Branches",
    tags: ["git", "branch"],
  },
  {
    name: "git branch {new branch name}",
    description: "Create a new branch with the specified name.",
    category: "Using Branches",
    tags: ["git", "branch", "create"],
  },
  {
    name: "git branch {new branch name} {commit id}",
    description: "Create a new branch pointing to the specified commit.",
    category: "Using Branches",
    tags: ["git", "branch", "create", "commit"],
  },
  {
    name: "git branch -d {branch name}",
    description: "Delete the specified branch.",
    category: "Using Branches",
    tags: ["git", "branch", "delete"],
  },
  {
    name: "git branch -D {branch name}",
    description: "Force delete the specified branch.",
    category: "Using Branches",
    tags: ["git", "branch", "delete"],
  },
  {
    name: "git branch -m {new name}",
    description: "Rename the current branch to the specified new name.",
    category: "Using Branches",
    tags: ["git", "branch", "rename"],
  },
  {
    name: "git branch -a",
    description: "List all branches, including remote branches.",
    category: "Using Branches",
    tags: ["git", "branch", "list", "remote"],
  },
  {
    name: "git checkout {branch name}",
    description: "Switch to the specified branch.",
    category: "Using Branches",
    tags: ["git", "checkout"],
  },
  {
    name: "git checkout -b {new branch name}",
    description: "Create a new branch and switch to it.",
    category: "Using Branches",
    tags: ["git", "checkout", "create"],
  },
  {
    name: "git checkout {commit id}",
    description: "Switch to a specific commit, detaching the HEAD.",
    category: "Using Branches",
    tags: ["git", "checkout", "commit"],
  },
  {
    name: "git checkout HEAD {filename}",
    description: "Restore the specified file to its state in the last commit.",
    category: "Using Branches",
    tags: ["git", "checkout", "restore"],
  },
  {
    name: "git merge {branch name}",
    description: "Merge the specified branch into the current branch.",
    category: "Using Branches",
    tags: ["git", "merge"],
  },
];
