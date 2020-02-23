function greeter(compiler) {
    return "hello, " + { compiler: compiler };
}
var user = "wojtek";
greeter(user);
