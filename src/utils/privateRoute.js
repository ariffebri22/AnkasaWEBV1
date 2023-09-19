"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export function privateRoute(Component) {
    const displayName = `PrivateRoute(${Component.displayName || Component.name || "Component"})`;

    const PrivateComponent = (props) => {
        const router = useRouter();
        useEffect(() => {
            const token = Cookies.get("token");
            if (!token) {
                Swal.fire({
                    title: "Attention",
                    text: "Please log in first to continue",
                    icon: "warning",
                }).then((confirm) => {
                    if (confirm.isConfirmed) {
                        router.push("/login");
                    }
                });
            }
        }, []);

        return <Component {...props} />;
    };

    PrivateComponent.displayName = displayName;
    return PrivateComponent;
}
