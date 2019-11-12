for ( var i = 0; i < 10; i++ )
{
    ( (i) =>
    {
        setTimeout(() => {
            console.log('iife :: ',i)
        }, 1000);
    })(i)
}

for ( var i = 0; i < 10; i++ )
{
   setTimeout(() => {
       console.log('normal :: ',i)
   }, 1000);
}