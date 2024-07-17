export const commands = [
    {
        name: 'git init',
        description:
            'Initialize a new Git repository in the current directory.',
        category: 'Setting Up a Repository',
        keywords: ['initialize repository', 'create repo'],
        tokens: [] as string[],
    },
    {
        name: 'git clone {url} {new directory name}',
        description:
            'Clone an existing repository from the given URL into a new directory specified.',
        category: 'Setting Up a Repository',
        keywords: ['clone repository', 'copy repo'],
        tokens: [] as string[],
    },
    {
        name: 'git clone {url}',
        description:
            'Clone an existing repository from the given URL into the current directory.',
        category: 'Setting Up a Repository',
        keywords: ['clone repository', 'copy repo'],
        tokens: [] as string[],
    },
    {
        name: 'git add {file name}',
        description:
            'Add the specified file to the staging area, preparing it for a commit.',
        category: 'Saving Changes',
        keywords: ['stage file', 'add to staging'],
        tokens: [] as string[],
    },
    {
        name: 'git add .',
        description:
            'Add all changed files in the current directory and its subdirectories to the staging area.',
        category: 'Saving Changes',
        keywords: ['stage all files', 'add all to staging'],
        tokens: [] as string[],
    },
    {
        name: "git add '*{file type}'",
        description:
            "Add all files of the specified type to the staging area. For example, 'git add *.txt' adds all text files.",
        category: 'Saving Changes',
        keywords: ['stage file type', 'add file type to staging'],
        tokens: [] as string[],
    },
    {
        name: 'git add {directory}',
        description:
            'Stage all changes of files within the specified directory.',
        category: 'Saving Changes',
        keywords: ['stage directory', 'add directory to staging'],
        tokens: [] as string[],
    },
    {
        name: 'git reset HEAD {file name}',
        description:
            'Unstage the specified file, making it the same as the last commit.',
        category: 'Saving Changes',
        keywords: ['unstage file', 'reset staging'],
        tokens: [] as string[],
    },
    {
        name: 'git reset {commit ID}',
        description:
            'Reset the working directory to match the state at the specified commit.',
        category: 'Saving Changes',
        keywords: ['reset to commit', 'rollback changes'],
        tokens: [] as string[],
    },
    {
        name: 'git commit',
        description:
            'Open the default text editor to write a commit message for the staged changes.',
        category: 'Saving Changes',
        keywords: ['commit changes', 'write commit message'],
        tokens: [] as string[],
    },
    {
        name: "git commit -m '{commit message}'",
        description:
            'Commit the staged changes with a message specified directly in the command line.',
        category: 'Saving Changes',
        keywords: ['commit with message', 'inline commit message'],
        tokens: [] as string[],
    },
    {
        name: "git commit -a -m '{commit message}'",
        description:
            'Automatically stage all modified and deleted files, then commit with the specified message.',
        category: 'Saving Changes',
        keywords: ['commit all changes', 'auto stage commit'],
        tokens: [] as string[],
    },
    {
        name: 'git diff',
        description:
            'Display changes between the working directory and the staging area.',
        category: 'Saving Changes',
        keywords: ['show changes', 'diff working staging'],
        tokens: [] as string[],
    },
    {
        name: 'git diff --staged',
        description:
            'Show differences between the staged changes and the last commit.',
        category: 'Saving Changes',
        keywords: ['diff staged changes', 'compare staged commit'],
        tokens: [] as string[],
    },
    {
        name: 'git diff {commit id 1} {commit id 2}',
        description: 'Compare the changes between two specified commits.',
        category: 'Saving Changes',
        keywords: ['compare commits', 'diff between commits'],
        tokens: [] as string[],
    },
    {
        name: 'git diff HEAD',
        description:
            'Show changes between the working directory and the last commit.',
        category: 'Saving Changes',
        keywords: [
            'diff working last commit',
            'show changes since last commit',
        ],
        tokens: [] as string[],
    },
    {
        name: 'git clean -n',
        description:
            'Perform a dry run of the clean operation, showing which files would be deleted without actually deleting them.',
        category: 'Undoing Changes',
        keywords: ['dry run clean', 'preview clean'],
        tokens: [] as string[],
    },
    {
        name: 'git clean -f',
        description: 'Delete untracked files from the working directory.',
        category: 'Undoing Changes',
        keywords: ['force clean', 'delete untracked files'],
        tokens: [] as string[],
    },
    {
        name: 'git clean -d',
        description: 'Remove untracked directories from the working directory.',
        category: 'Undoing Changes',
        keywords: ['clean directories', 'remove untracked directories'],
        tokens: [] as string[],
    },
    {
        name: 'git revert HEAD',
        description:
            'Revert the most recent commit, creating a new commit with the opposite changes.',
        category: 'Undoing Changes',
        keywords: ['revert last commit', 'undo recent commit'],
        tokens: [] as string[],
    },
    {
        name: 'git revert {commit ID}',
        description:
            'Revert the changes made by the specified commit, creating a new commit with the opposite changes.',
        category: 'Undoing Changes',
        keywords: ['revert commit', 'undo commit changes'],
        tokens: [] as string[],
    },
    {
        name: 'git revert {commit ID} --no-edit',
        description:
            'Revert the specified commit without opening the editor for a commit message.',
        category: 'Undoing Changes',
        keywords: ['revert commit no edit', 'undo commit no message'],
        tokens: [] as string[],
    },
    {
        name: "git commit --amend -m '{new commit message}'",
        description: 'Modify the message of the most recent commit.',
        category: 'Undoing Changes',
        keywords: ['amend commit message', 'change commit message'],
        tokens: [] as string[],
    },
    {
        name: 'git commit --amend --no-edit',
        description:
            'Amend the most recent commit without changing the commit message.',
        category: 'Undoing Changes',
        keywords: ['amend commit no edit', 'update commit no message'],
        tokens: [] as string[],
    },
    {
        name: 'git commit --amend',
        description:
            'Amend the most recent commit with the new staged changes.',
        category: 'Undoing Changes',
        keywords: ['amend commit changes', 'update recent commit'],
        tokens: [] as string[],
    },
    {
        name: 'git remote',
        description: 'Display the list of remote repositories.',
        category: 'Collaborating and Syncing',
        keywords: ['list remotes', 'show remote repos'],
        tokens: [] as string[],
    },
    {
        name: 'git remote -v',
        description: 'Display the URLs of the remote repositories.',
        category: 'Collaborating and Syncing',
        keywords: ['remote URLs', 'show remote URLs'],
        tokens: [] as string[],
    },
    {
        name: 'git remote add origin {github url}',
        description: 'Add a remote repository with the specified URL.',
        category: 'Collaborating and Syncing',
        keywords: ['add remote', 'set remote URL'],
        tokens: [] as string[],
    },
    {
        name: 'git remote {url} {branch name}',
        description:
            "Update the remote repository's URL for a specific branch.",
        category: 'Collaborating and Syncing',
        keywords: ['update remote URL', 'set branch remote'],
        tokens: [] as string[],
    },
    {
        name: 'git remote rm {remote repo name}',
        description: 'Remove the specified remote repository.',
        category: 'Collaborating and Syncing',
        keywords: ['remove remote', 'delete remote repo'],
        tokens: [] as string[],
    },
    {
        name: 'git remote rename {remote repo name} {new name}',
        description: 'Rename an existing remote repository.',
        category: 'Collaborating and Syncing',
        keywords: ['rename remote', 'update remote name'],
        tokens: [] as string[],
    },
    {
        name: 'git fetch {remote repo name}',
        description: 'Fetch all branches from the specified remote repository.',
        category: 'Collaborating and Syncing',
        keywords: ['fetch branches', 'update local branches'],
        tokens: [] as string[],
    },
    {
        name: 'git fetch {remote repo name} {branch}',
        description:
            'Fetch all commits from the specified branch of the remote repository.',
        category: 'Collaborating and Syncing',
        keywords: ['fetch branch', 'update local branch'],
        tokens: [] as string[],
    },
    {
        name: 'git fetch --dry-run',
        description:
            'Preview changes from the remote repository without applying them to the local repository.',
        category: 'Collaborating and Syncing',
        keywords: ['fetch preview', 'dry run fetch'],
        tokens: [] as string[],
    },
    {
        name: 'git pull {remote repo}',
        description:
            'Pull changes from the specified remote repository into the local repository.',
        category: 'Collaborating and Syncing',
        keywords: ['pull changes', 'update local repo'],
        tokens: [] as string[],
    },
    {
        name: 'git pull {remote repo}/{branch name}',
        description:
            'Pull changes from the specified branch of the remote repository into the local repository.',
        category: 'Collaborating and Syncing',
        keywords: ['pull branch', 'update local branch'],
        tokens: [] as string[],
    },
    {
        name: 'git pull --rebase {remote repo}',
        description:
            'Fetch changes from the remote repository and rebase them onto the local branch.',
        category: 'Collaborating and Syncing',
        keywords: ['pull rebase', 'rebase remote changes'],
        tokens: [] as string[],
    },
    {
        name: 'git push {remote repo} {branch name}',
        description:
            'Push commits from the local repository to the specified branch of the remote repository.',
        category: 'Collaborating and Syncing',
        keywords: ['push branch', 'upload branch changes'],
        tokens: [] as string[],
    },
    {
        name: 'git push {remote repo} --all',
        description:
            'Push all branches from the local repository to the remote repository.',
        category: 'Collaborating and Syncing',
        keywords: ['push all branches', 'upload all changes'],
        tokens: [] as string[],
    },
    {
        name: 'git push --force',
        description:
            'Force push the local changes to the remote repository, overwriting any conflicts.',
        category: 'Collaborating and Syncing',
        keywords: ['force push', 'overwrite remote'],
        tokens: [] as string[],
    },
    {
        name: 'git push --tags',
        description:
            'Push all tags from the local repository to the remote repository.',
        category: 'Collaborating and Syncing',
        keywords: ['push tags', 'upload tags'],
        tokens: [] as string[],
    },
    {
        name: 'git merge {branch name}',
        description: 'Merge the specified branch into the current branch.',
        category: 'Branching and Merging',
        keywords: ['merge branch', 'combine branches'],
        tokens: [] as string[],
    },
    {
        name: 'git merge --no-ff {branch name}',
        description:
            'Merge the specified branch into the current branch without fast-forwarding.',
        category: 'Branching and Merging',
        keywords: ['merge no ff', 'non-fast-forward merge'],
        tokens: [] as string[],
    },
    {
        name: 'git merge --squash {branch name}',
        description:
            'Merge the specified branch into the current branch, squashing all commits into a single commit.',
        category: 'Branching and Merging',
        keywords: ['merge squash', 'single commit merge'],
        tokens: [] as string[],
    },
    {
        name: 'git merge --abort',
        description:
            'Abort the current merge process and return to the previous state.',
        category: 'Branching and Merging',
        keywords: ['abort merge', 'cancel merge'],
        tokens: [] as string[],
    },
    {
        name: 'git branch',
        description: 'List all local branches in the repository.',
        category: 'Branching and Merging',
        keywords: ['list branches', 'show branches'],
        tokens: [] as string[],
    },
    {
        name: 'git branch {branch name}',
        description: 'Create a new branch with the specified name.',
        category: 'Branching and Merging',
        keywords: ['create branch', 'new branch'],
        tokens: [] as string[],
    },
    {
        name: 'git branch -d {branch name}',
        description: 'Delete the specified branch.',
        category: 'Branching and Merging',
        keywords: ['delete branch', 'remove branch'],
        tokens: [] as string[],
    },
    {
        name: 'git branch -m {old name} {new name}',
        description: 'Rename a branch from the old name to the new name.',
        category: 'Branching and Merging',
        keywords: ['rename branch', 'update branch name'],
        tokens: [] as string[],
    },
    {
        name: 'git checkout {branch name}',
        description: 'Switch to the specified branch.',
        category: 'Branching and Merging',
        keywords: ['switch branch', 'checkout branch'],
        tokens: [] as string[],
    },
    {
        name: 'git checkout -b {branch name}',
        description:
            'Create and switch to a new branch with the specified name.',
        category: 'Branching and Merging',
        keywords: ['create switch branch', 'new checkout branch'],
        tokens: [] as string[],
    },
    {
        name: 'git checkout {commit ID}',
        description: 'Switch to the specified commit in the history.',
        category: 'Branching and Merging',
        keywords: ['checkout commit', 'switch to commit'],
        tokens: [] as string[],
    },
    {
        name: 'git log',
        description: 'Show the commit history for the current branch.',
        category: 'Inspecting a Repository',
        keywords: ['commit history', 'show log'],
        tokens: [] as string[],
    },
    {
        name: 'git log --oneline',
        description:
            'Show the commit history in a condensed form with one commit per line.',
        category: 'Inspecting a Repository',
        keywords: ['condensed history', 'oneline log'],
        tokens: [] as string[],
    },
    {
        name: 'git log --graph',
        description: 'Show the commit history as a graph.',
        category: 'Inspecting a Repository',
        keywords: ['graph log', 'visual history'],
        tokens: [] as string[],
    },
    {
        name: 'git log -p',
        description:
            'Show the commit history with the differences introduced in each commit.',
        category: 'Inspecting a Repository',
        keywords: ['detailed log', 'commit diffs'],
        tokens: [] as string[],
    },
    {
        name: 'git status',
        description:
            'Show the status of changes in the working directory and the staging area.',
        category: 'Inspecting a Repository',
        keywords: ['show status', 'current changes'],
        tokens: [] as string[],
    },
    {
        name: 'git show {commit ID}',
        description: 'Show the details of the specified commit.',
        category: 'Inspecting a Repository',
        keywords: ['show commit', 'commit details'],
        tokens: [] as string[],
    },
    {
        name: 'git stash',
        description:
            'Save the current changes in a temporary area and revert to the last commit.',
        category: 'Managing Stashes',
        keywords: ['stash changes', 'save temp changes'],
        tokens: [] as string[],
    },
    {
        name: 'git stash pop',
        description:
            'Apply the most recently stashed changes and remove them from the stash.',
        category: 'Managing Stashes',
        keywords: ['apply stash', 'restore stash'],
        tokens: [] as string[],
    },
    {
        name: 'git stash list',
        description: 'List all stashed changes.',
        category: 'Managing Stashes',
        keywords: ['list stashes', 'show stashes'],
        tokens: [] as string[],
    },
    {
        name: 'git stash apply {stash ID}',
        description:
            'Apply the specified stashed changes without removing them from the stash.',
        category: 'Managing Stashes',
        keywords: ['apply specific stash', 'restore stash changes'],
        tokens: [] as string[],
    },
    {
        name: 'git stash drop {stash ID}',
        description: 'Remove the specified stashed changes.',
        category: 'Managing Stashes',
        keywords: ['remove stash', 'delete stash'],
        tokens: [] as string[],
    },
    {
        name: 'git stash clear',
        description: 'Remove all stashed changes.',
        category: 'Managing Stashes',
        keywords: ['clear stashes', 'delete all stashes'],
        tokens: [] as string[],
    }
];
