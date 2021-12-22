export function sum(a: number, b: number) :number
{
    if (a>b)
    {
        return a+b
    }
    if (a+b>10)
    {
        return a-b
    }
    if (a<5)
    {
        return b
    }
}