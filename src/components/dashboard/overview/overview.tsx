"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

export default function Overview() {
    const [formData, setFormData] = useState({
        name: '',
        goals: '',
        audience: '',
        budget: '',
        currency: ''
    });

    const isFormComplete = () => {
        return Object.values(formData).every(value => value !== '');
    };
    const getTimeOfDay = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Morning";
        if (hour < 18) return "Afternoon";
        return "Evening";
    };

    return (
        <div className="flex justify-between p-6">
            <div className="text-[20px] tracking-[2px] font-[400] leading-[100%]">
                {getTimeOfDay()}
            </div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="px-4 py-2 bg-[#060607] text-white cursor-pointer rounded-md hover:bg-gray-800">
                            <Plus className="mr-2 h-6 w-6" />
                            Create New Campaign
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-[#060607] border-none">
                        <DialogHeader>
                            <DialogTitle className="text-white">Create New Campaign</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2 mt-3 mb-1">
                                <label htmlFor="name" className="text-white">Campaign Name</label>
                                <Input 
                                    id="name" 
                                    placeholder="Enter campaign name" 
                                    className="border-sm border-zinc-500 text-white"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="grid gap-2 my-1">
                                <label htmlFor="goals" className="text-white">Campaign Goals</label>
                                <Select onValueChange={(value) => setFormData({...formData, goals: value})}>
                                    <SelectTrigger className="w-full text-white">
                                        <SelectValue placeholder="Select goal" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#060607] border-zinc-500 text-white">
                                        <SelectItem value="reach" className="hover:bg-zinc-800 focus:bg-zinc-800">Reach</SelectItem>
                                        <SelectItem value="traffic" className="hover:bg-zinc-800 focus:bg-zinc-800">Traffic</SelectItem>
                                        <SelectItem value="app-install" className="hover:bg-zinc-800 focus:bg-zinc-800">App Install</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2 my-1">
                                <label htmlFor="audience" className="text-white">Target Audience</label>
                                <Input 
                                    id="audience" 
                                    placeholder="Enter target audience"
                                    onChange={(e) => setFormData({...formData, audience: e.target.value})}
                                    className="text-white"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="budget" className="text-white">Budget</label>
                                <div className="flex gap-2">
                                    <Input 
                                        type="number" 
                                        placeholder="Amount" 
                                        className="flex-1 text-white"
                                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                                    />
                                    <Select onValueChange={(value) => setFormData({...formData, currency: value})}>
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="SOL" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#060607] border-zinc-500 text-white">
                                            <SelectItem value="usdc" className="hover:bg-zinc-800 focus:bg-zinc-800">USDC</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Button 
                                className="mt-4 bg-orange-500 text-white disabled:bg-gray-600 disabled:cursor-not-allowed"
                                disabled={!isFormComplete()}
                                onClick={() => {
                                    console.log('Form submitted:', formData);
                                    // Add your submit logic here
                                }}
                            >
                                Next
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}