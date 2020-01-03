<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {
        $tasks = Task::orderBy('id','DESC')->get();
        return $tasks;
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $task = Task::create([
            'keep' => $request->keep
        ]);
        
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        $task = Task::find($id);
        return $task;
    }


    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::find($id);
        $task->delete();
        return 1;
    }
}
