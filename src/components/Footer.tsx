"use client";
import Link from "next/link";
import {ShiningElement} from "@/components/ShiningElement";
import Bottle1 from "../assets/svg/bottle1.svg";
import Bottle2 from "../assets/svg/bottle2.svg";
import Twink from "../assets/svg/twink.svg";

export default function Footer() {
    return (
        <footer className="main-footer">
            <ShiningElement elementIndex={3} svgElement={<Twink />} />
            <ShiningElement elementIndex={1} svgElement={<Bottle1 />} />
            <ShiningElement elementIndex={2} svgElement={<Bottle2 />} />
                <p className="main-footer__copyright">
                    Created by  &#169;:
                    <Link
                        className="main-footer__link"
                        href="https://github.com/Menolas"
                        target="_blank"
                    >
                        Menolas
                    </Link>
                </p>
        </footer>
    );
};
