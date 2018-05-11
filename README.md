The project presents two variants of animation.

_Animation Option 1, trigger('animationOption1')_  
Works without complaints.

_Animation Option 2, trigger('animationOption2')_  
**transition doesn't work here.**  
[Online check this project in StackBlitz.com](https://stackblitz.com/github/MyTempGitForCommunity/angular-6-animation-transition)
<br>
--<br>
This problem has a solution:
https://stackoverflow.com/questions/50300442/angular-6-animation-ngif-transition-not-work#50300577

But it is best to use:
https://angular.io/api/animations/transition#using-enter-and-leave
