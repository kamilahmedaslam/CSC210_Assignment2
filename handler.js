function calculator(permission_type) {
    var value = 0;
    if (permission_type == "read") {
        value = 4;
    }
    else if (permission_type == "write") {
        value = 2;
    }
    else if (permission_type == "execute") {
        value = 1;
    }

}